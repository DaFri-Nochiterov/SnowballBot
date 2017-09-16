import { EventEmitter } from "events";
import { ModuleLoader, IModuleInfo, convertToModulesMap, SCHEMA_MODULEINFO } from "./ModuleLoader";
import { ILocalizerOptions, Localizer, SCHEMA_LOCALIZEROPTIONS } from "./Localizer";
import logger = require("loggy");
import * as djs from "discord.js";
import { ISchema, Typer } from "./Typer";

export interface IBotConfig {
	/**
	 * Bot token
	 */
	token: string;
	/**
	 * Name of bot
	 */
	name: string;
	/**
	 * discord's Snowflake ID of bot owner
	 */
	botOwner: string;
	/**
	 * Modules to automatic load
	 */
	autoLoad: string[];
	/**
	 * Array of modules info
	 */
	modules: IModuleInfo[];
	/**
	 * Discord Client's config
	 */
	djs_config: djs.ClientOptions;
	/**
	 * Localizator options
	 */
	localizerOptions: ILocalizerOptions;
	/**
	 * Sharding options
	 */
	shardingOptions: {
		enabled: boolean;
		shards: number;
	};
	/**
	 * Enable queue mode?
	 * If `false`, all modules will be loaded at same time
	 * Parallel loading is good for debugging
	 */
	queueModuleLoading: boolean;
}

export interface IPublicBotConfig {
	/**
	 * Name of bot
	 */
	name: string;
	/**
	 * ID of bot owner
	 */
	botOwner: string;
	/**
	 * Bot is runned in sharded mode
	 */
	sharded: boolean;
	/**
	 * Main shard
	 */
	mainShard: boolean;
	/**
	 * Shard ID
	 */
	shardId: number;
	/**
	 * Total Shards
	 */
	shardsCount: number;
}

export interface IInternalConfig {
	/**
	 * Currently runned shards
	 */
	shardsCount: number;
	/**
	 * Current Shard ID
	 */
	shardId: number;
}

declare global {
	/**
	 * Bot itself
	 */
	// tslint:disable-next-line:no-unused-variable
	const discordBot: djs.Client;

	/**
	 * Public bot config visible to all modules
	 */
	// tslint:disable-next-line:no-unused-variable
	const botConfig: IPublicBotConfig;

	/**
	 * Localizer
	 */
	// tslint:disable-next-line:no-unused-variable
	const localizer: Localizer;

	/**
	 * Module Loader
	 */
	// tslint:disable-next-line:no-unused-variable
	const modLoader: ModuleLoader;
}

const SCHEMA_CONFIG: ISchema = {
	"token": { type: "string" },
	"name": { type: "string" },
	"botOwner": { type: "string" },
	"autoLoad": {
		type: "object", isArray: true,
		elementSchema: {
			type: "string"
		}
	},
	"modules": {
		type: "object", isArray: true,
		elementSchema: SCHEMA_MODULEINFO
	},
	"djsConfig": { type: "any" },
	"localizerOptions": {
		type: "object",
		schema: SCHEMA_LOCALIZEROPTIONS
	},
	"shardingOptions": {
		type: "object",
		schema: {
			"enabled": { type: "boolean" },
			"shards": { type: "number", notNaN: true }
		}
	},
	"queueModuleLoading": { type: "boolean" }
};

export class SnowballBot extends EventEmitter {
	/**
	 * Module loader
	 */
	modLoader: ModuleLoader;
	/**
	 * Configuration
	 */
	config: IBotConfig;
	/**
	 * Internal configuration
	 */
	internalConfiguration: IInternalConfig;
	/**
	 * Discord Bot
	 */
	discordBot: djs.Client;

	log: Function = logger("::SnowballBot");

	constructor(config: IBotConfig, internalConfig: IInternalConfig) {
		super();
		Typer.checkObjectBySchema(SCHEMA_CONFIG, config);
		this.config = config;
		this.internalConfiguration = internalConfig;
		this.log = logger(`${config.name}:SnowballBot`);
	}

	/**
	 * Prepare module loader
	 * It will load all modules / plugins
	 */
	async prepareModLoader() {
		this.modLoader = new ModuleLoader({
			basePath: "./cogs/",
			name: `${this.config.name}:ModLoader`,
			defaultSet: this.config.autoLoad,
			registry: convertToModulesMap(this.config.modules),
			queueModuleLoading: !!this.config.queueModuleLoading
		});
		await this.modLoader.loadModules();

		// Public module loader
		Object.defineProperty(global, "modLoader", {
			configurable: false, enumerable: false,
			writable: true, value: this.modLoader
		});
	}

	/**
	 * Prepare global client variable and client itself
	 */
	prepareDiscordClient() {
		let publicBotConfig: IPublicBotConfig = {
			name: this.config.name,
			botOwner: this.config.botOwner,
			mainShard: true,
			sharded: false,
			shardId: 1,
			shardsCount: 1
		};

		// checking options
		let djsOptions = this.config.djs_config || {};

		{ // checking shards count
			let shardCount = this.internalConfiguration.shardsCount;
			if(this.config.shardingOptions.enabled) {
				this.log("warn", "WARNING! Running in sharding mode is still expiremental, please use it with risk!");
				if(shardCount < 0) {
					this.log("err", "Invalid shards count", shardCount);
					throw new Error("Invalid shards count");
				}
				publicBotConfig.sharded = true;
			}
		}

		{ // checking shard id
			let shardId = this.internalConfiguration.shardId;
			if(shardId >= 0) {
				this.log("info", "Running as shard with ID", shardId);
				if(shardId === 0) {
					publicBotConfig.mainShard = true;
				}
				publicBotConfig.shardId = shardId;
			} else {
				throw new Error("Invalid shard id");
			}
		}

		djsOptions.shardId = this.internalConfiguration.shardId;
		djsOptions.shardCount = this.internalConfiguration.shardsCount;

		this.log("info", "Preparing Discord client");

		// Making new Discord Client
		this.discordBot = new djs.Client(djsOptions);

		// Setting max listeners
		this.discordBot.setMaxListeners(0);

		this.discordBot.on("error", (err) => {
			this.log("err", "Error at Discord client", err);
		});

		// Global bot variable, which should be used by plugins
		Object.defineProperty(global, "discordBot", {
			configurable: false, enumerable: false,
			writable: true, value: this.discordBot
		});

		// Public bot config
		Object.defineProperty(global, "botConfig", {
			configurable: false, enumerable: false,
			writable: true, value: publicBotConfig
		});
	}

	async prepareLocalizator() {
		let localizer = new Localizer(`${this.config.name}:Localizer`, this.config.localizerOptions);
		await localizer.init();
		Object.defineProperty(global, "localizer", {
			configurable: false, enumerable: false,
			writable: false, value: localizer
		});
	}

	/**
	 * Connect to Discord
	 * @returns {Promise}
	 */
	async connect() {
		this.log("info", "Connecting to Discord...");
		// Just calling method
		return await this.discordBot.login(this.config.token);
	}
}