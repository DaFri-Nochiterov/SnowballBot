export interface IAchievementsStatus {
    defense: {
        armor_up:boolean;
        charge:boolean;
        cold_snap:boolean;
        did_that_string:boolean;
        ice_blocked:boolean;
        mine_like_a_steel_trap:boolean;
        raid_wipe:boolean;
        roadkill:boolean;
        simple_geometry:boolean;
        smooth_as_silk:boolean;
        the_dragon_is_sated:boolean;
        triple_threat:boolean;
    },
    general: {
        blackjack:boolean;
        centenary:boolean;
        decked_out:boolean;
        decorated:boolean;
        level_10:boolean;
        level_25:boolean;
        level_50:boolean;
        survival_expert:boolean;
        the_friend_zone:boolean;
        the_path_is_closed:boolean;
        undying:boolean;
    },
    maps: {
        cant_touch_this:boolean;
        double_cap:boolean;
        escort_duty:boolean;
        lockdown:boolean;
        shutout:boolean;
        world_traveler:boolean;
    },
    offense: {
        clearing_the_area:boolean;
        death_from_above:boolean;
        die_die_die_die:boolean;
        hack_the_planet:boolean;
        its_high_noon:boolean;
        power_outage:boolean;
        rocket_man:boolean;
        slice_and_dice:boolean;
        special_delivery:boolean;
        target_rich_environment:boolean;
        their_own_worst_enemy:boolean;
        total_recall:boolean;
        waste_not_want_not:boolean;
        whoa_there:boolean;
    },
    special: {
        ambush:boolean;
        cleanup_duty:boolean;
        cool_as_ice:boolean;
        flagbearer:boolean;
        four_they_were:boolean;
        held_the_door:boolean;
        not_a_scratch:boolean;
        snowed_in:boolean;
        survived_the_night:boolean;
        whap:boolean;
    },
    support: {
        enabler:boolean;
        group_health_plan:boolean;
        huge_rez:boolean;
        huge_success:boolean;
        naptime:boolean;
        rapid_discord:boolean;
        supersonic:boolean;
        the_car_wash:boolean;
        the_floor_is_lava:boolean;
        the_iris_embraces_you:boolean;
    },
    tank: {
        anger_management:boolean;
        game_over:boolean;
        giving_you_the_hook:boolean;
        halt_state:boolean;
        hog_wild:boolean;
        i_am_your_shield:boolean;
        mine_sweeper:boolean;
        overclocked:boolean;
        power_overwhelming:boolean;
        shot_down:boolean;
        storm_earth_and_fire:boolean;
        the_power_of_attraction:boolean;
    }
}

export interface IHeroesInfo<T> {
    ana:T;
    bastion:T;
    dva:T;
    genji:T;
    hanzo:T;
    junkrat:T;
    lucio:T;
    mccree:T;
    mei:T;
    mercy:T;
    orisa:T;
    pharah:T;
    reaper:T;
    reinhardt:T;
    roadhog:T;
    soldier76:T;
    sombra:T;
    symmetra:T;
    torbjorn:T;
    tracer:T;
    widowmaker:T;
    winston:T;
    zarya:T;
    zenyatta:T;   
}

export interface IPlaytimeInfo {
    quickplay?:IHeroesInfo<number>;
    competitive?:IHeroesInfo<number>;
}

export interface IRegionalProfile {
    achievements:IAchievementsStatus;
    heroes:IHeroesStats;
    stats:IStatsInfo;
}

export interface IBlobResponse {
    eu?:IRegionalProfile;
    kr?:IRegionalProfile;
    us?:IRegionalProfile;
}

export interface IAverageStats {
    damage_done_avg:number;
    deaths_avg:number;
    eliminations_avg:number;
    final_blows_avg:number;
    healing_done_avg:number;
    melee_final_blows_avg:number;
    objective_kills_avg:number;
    objective_time_avg:number;
    solo_kills_avg:number;
    time_spent_on_fire_avg:number;
}

export interface IGameStats {
    cards:number;
    damage_done:number;
    damage_done_most_in_game:number;
    deaths:number;
    defensive_assists:number;
    defensive_assists_most_in_game:number;
    eliminations:number;
    eliminations_most_in_game:number;
    environmental_deaths:number;
    environmental_kills:number;
    environmental_kills_most_in_game:number;
    final_blows:number;
    final_blows_most_in_game:number;
    games_won:number;
    healing_done:number;
    healing_done_most_in_game:number;
    kill_streak_best:number;
    kpd:number;
    medals:number;
    medals_bronze:number;
    medals_gold:number;
    medals_silver:number;
    melee_final_blows:number;
    melee_final_blows_most_in_game:number;
    multikill_best:number;
    multikills:number;
    objective_kills:number;
    objective_kills_most_in_game:number;
    objective_time:number;
    objective_time_most_in_game:number;
    offensive_assists:number;
    offensive_assists_most_in_game:number;
    recon_assists:number;
    recon_assists_most_in_game:number;
    shield_generator_destroyed:number;
    shield_generator_destroyed_most_in_game:number;
    solo_kills:number;
    solo_kills_most_in_game:number;
    teleporter_pad_destroyed_most_in_game:number;
    teleporter_pads_destroyed:number;
    time_played:number;
    time_spent_on_fire:number;
    time_spent_on_fire_most_in_game:number;
    turrets_destroyed:number;
    turrets_destroyed_most_in_game:number;
}

export interface IOverallStats {
    avatar:string;
    comprank:string;
    games:number;
    level:number;
    prestige:number;
    rank_image:string;
    tier:"bronze"|"silver"|"gold"|"platinum"|"diamond"|"master"|"grandmaster";
}

export interface IStats {
    competitive:boolean;
    average_stats:IAverageStats;
    game_stats:IGameStats;
    overall_stats:IOverallStats;
}

export interface IStatsInfo {
    competitive:IStats;
    quickplay:IStats;
}

export interface IHeroesStats {
    sombra: {
        average_stats: {
            deaths_average: number,
            damage_done_average: number,
            objective_kills_average: number,
            healing_done_average: number,
            time_spent_on_fire_average: number,
            solo_kills_average: number,
            final_blows_average: number,
            offensive_assists_average: number,
            melee_final_blows_average: number,
            objective_time_average: number,
            enemies_empd_average: number,
            enemies_hacked_average: number,
            eliminations_average: number
        },
        general_stats: {
            time_spent_on_fire: number,
            kill_streak_best: number,
            teleporter_pad_destroyed: number,
            objective_time_most_in_game: number,
            environmental_deaths: number,
            time_played: number,
            enemies_empd_most_in_game: number,
            shots_fired: number,
            turrets_destroyed: number,
            healing_done_most_in_life: number,
            medals_silver: number,
            weapon_accuracy: number,
            healing_done: number,
            cards: number,
            healing_done_most_in_game: number,
            eliminations: number,
            objective_kills_most_in_game: number,
            critical_hits: number,
            enemies_hacked: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            shots_hit: number,
            medals_bronze: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            offensive_assists_most_in_game: number,
            damage_done_most_in_life: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            offensive_assists: number,
            melee_final_blows: number,
            enemies_hacked_most_in_game: number,
            objective_kills: number,
            eliminations_per_life: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            medals: number,
            games_won: number,
            medals_gold: number,
            deaths: number,
            enemies_empd: number,
            time_spent_on_fire_most_in_game: number,
            objective_time: number
        },
        hero_stats: {
            melee_final_blow_most_in_game: number
        }
    },
    mercy: {
        average_stats: {
            damage_amplified_average: number,
            deaths_average: number,
            defensive_assists_average: number,
            damage_done_average: number,
            blaster_kills_average: number,
            critical_hits_average: number,
            objective_kills_average: number,
            healing_done_average: number,
            self_healing_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            eliminations_average: number,
            offensive_assists_average: number,
            melee_final_blows_average: number,
            time_spent_on_fire_average: number,
            objective_time_average: number,
            players_resurrected_average: number
        },
        general_stats: {
            critical_hits_most_in_game: number,
            kill_streak_best: number,
            objective_time_most_in_game: number,
            damage_amplified: number,
            environmental_deaths: number,
            time_played: number,
            shots_fired: number,
            turrets_destroyed: number,
            healing_done_most_in_life: number,
            medals_silver: number,
            critical_hits_most_in_life: number,
            weapon_accuracy: number,
            healing_done: number,
            cards: number,
            healing_done_most_in_game: number,
            eliminations: number,
            objective_kills_most_in_game: number,
            critical_hits: number,
            time_spent_on_fire: number,
            self_healing_most_in_game: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            defensive_assists: number,
            shots_hit: number,
            defensive_assists_most_in_game: number,
            medals_bronze: number,
            solo_kills_most_in_game: number,
            damage_amplified_most_in_game: number,
            final_blows_most_in_game: number,
            offensive_assists_most_in_game: number,
            damage_done_most_in_life: number,
            critical_hit_accuracy: number,
            self_healing: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            offensive_assists: number,
            melee_final_blows: number,
            blaster_kills: number,
            objective_kills: number,
            eliminations_per_life: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            blaster_kills_most_in_game: number,
            medals: number,
            games_won: number,
            medals_gold: number,
            deaths: number,
            teleporter_pads_destroyed: number,
            time_spent_on_fire_most_in_game: number,
            objective_time: number
        },
        hero_stats: {
            melee_final_blows_most_in_game: number,
            players_resurrected_most_in_game: number,
            players_resurrected: number
        }
    },
    lucio: {
        average_stats: {
            deaths_average: number,
            defensive_assists_average: number,
            damage_done_average: number,
            critical_hits_average: number,
            objective_kills_average: number,
            sound_barriers_provided_average: number,
            healing_done_average: number,
            self_healing_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            offensive_assists_average: number,
            melee_final_blows_average: number,
            time_spent_on_fire_average: number,
            objective_time_average: number,
            eliminations_average: number
        },
        general_stats: {
            critical_hits_most_in_game: number,
            kill_streak_best: number,
            objective_time_most_in_game: number,
            environmental_deaths: number,
            time_played: number,
            shots_fired: number,
            turrets_destroyed: number,
            healing_done_most_in_life: number,
            medals_silver: number,
            critical_hits_most_in_life: number,
            weapon_accuracy: number,
            healing_done: number,
            cards: number,
            healing_done_most_in_game: number,
            eliminations: number,
            objective_kills_most_in_game: number,
            critical_hits: number,
            time_spent_on_fire: number,
            self_healing_most_in_game: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            defensive_assists: number,
            shots_hit: number,
            defensive_assists_most_in_game: number,
            medals_bronze: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            offensive_assists_most_in_game: number,
            damage_done_most_in_life: number,
            critical_hit_accuracy: number,
            self_healing: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            offensive_assists: number,
            melee_final_blows: number,
            objective_kills: number,
            eliminations_per_life: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            medals: number,
            games_won: number,
            medals_gold: number,
            deaths: number,
            time_spent_on_fire_most_in_game: number,
            environmental_kills: number,
            objective_time: number
        },
        hero_stats: {
            sound_barriers_provided: number,
            sound_barriers_provided_most_in_game: number,
            melee_final_blow_most_in_game: number
        }
    },
    dva: {
        average_stats: {
            deaths_average: number,
            damage_done_average: number,
            critical_hits_average: number,
            objective_kills_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            damage_blocked_average: number,
            self_destruct_kills_average: number,
            time_spent_on_fire_average: number,
            melee_final_blows_average: number,
            mechs_called_average: number,
            objective_time_average: number,
            eliminations_average: number
        },
        general_stats: {
            medals_bronze: number,
            medals_gold: number,
            time_spent_on_fire: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            critical_hits_most_in_game: number,
            kill_streak_best: number,
            teleporter_pad_destroyed: number,
            objective_time_most_in_game: number,
            environmental_deaths: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            multikill_best: number,
            self_destruct_kills: number,
            time_spent_on_fire_most_in_game: number,
            melee_final_blows: number,
            shots_fired: number,
            turrets_destroyed: number,
            objective_kills: number,
            eliminations_per_life: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            eliminations: number,
            critical_hits_most_in_life: number,
            medals: number,
            weapon_accuracy: number,
            medals_silver: number,
            self_destruct_kills_most_in_game: number,
            games_won: number,
            cards: number,
            critical_hits: number,
            critical_hit_accuracy: number,
            objective_kills_most_in_game: number,
            deaths: number,
            objective_time: number,
            multikills: number,
            time_played: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            damage_done_most_in_life: number,
            shots_hit: number
        },
        hero_stats: {
            damage_blocked_most_in_game: number,
            damage_blocked: number,
            mech_deaths: number,
            mechs_called: number,
            mechs_called_most_in_game: number,
            melee_final_blow_most_in_game: number
        }
    },
    symmetra: {
        average_stats: {
            sentry_turret_kills_average: number,
            deaths_average: number,
            players_teleported_average: number,
            objective_kills_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            damage_blocked_average: number,
            time_spent_on_fire_average: number,
            teleporter_uptime_average: number,
            objective_time_average: number,
            eliminations_average: number,
            damage_done_average: number
        },
        general_stats: {
            medals_bronze: number,
            time_spent_on_fire: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            kill_streak_best: number,
            multikill_best: number,
            objective_time_most_in_game: number,
            environmental_deaths: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            medals_gold: number,
            objective_kills: number,
            eliminations_per_life: number,
            solo_kills: number,
            eliminations: number,
            medals: number,
            medals_silver: number,
            damage_blocked_most_in_game: number,
            games_won: number,
            cards: number,
            turrets_destroyed: number,
            multikills: number,
            damage_blocked: number,
            objective_kills_most_in_game: number,
            deaths: number,
            teleporter_pads_destroyed: number,
            time_spent_on_fire_most_in_game: number,
            time_played: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            damage_done_most_in_life: number,
            objective_time: number
        },
        hero_stats: {
            players_teleported_most_in_game: number,
            sentry_turret_kills: number,
            teleporter_uptime_best_in_game: number,
            sentry_turret_kills_most_in_game: number,
            players_teleported: number,
            teleporter_uptime: number
        }
    },
    widowmaker: {
        average_stats: {
            deaths_average: number,
            damage_done_average: number,
            critical_hits_average: number,
            objective_kills_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            venom_mine_kills_average: number,
            time_spent_on_fire_average: number,
            melee_final_blows_average: number,
            objective_time_average: number,
            scoped_critical_hits_average: number,
            eliminations_average: number
        },
        general_stats: {
            medals_bronze: number,
            medals_gold: number,
            time_spent_on_fire: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            critical_hits_most_in_game: number,
            kill_streak_best: number,
            teleporter_pad_destroyed: number,
            objective_time_most_in_game: number,
            environmental_deaths: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            time_spent_on_fire_most_in_game: number,
            shots_fired: number,
            turrets_destroyed: number,
            objective_kills: number,
            eliminations_per_life: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            eliminations: number,
            critical_hits_most_in_life: number,
            medals: number,
            weapon_accuracy: number,
            medals_silver: number,
            games_won: number,
            critical_hits: number,
            critical_hit_accuracy: number,
            objective_kills_most_in_game: number,
            deaths: number,
            melee_final_blow: number,
            objective_time: number,
            card: number,
            time_played: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            damage_done_most_in_life: number,
            shots_hit: number
        },
        hero_stats: {
            melee_final_blow_most_in_game: number,
            scoped_critical_hits: number,
            scoped_critical_hits_most_in_game: number,
            scoped_accuracy: number,
            scoped_shots: number,
            venom_mine_kills_most_in_game: number,
            recon_assists_most_in_game: number,
            scoped_hits: number,
            scoped_accuracy_best_in_game: number,
            venom_mine_kills: number
        }
    },
    reaper: {
        average_stats: {
            deaths_average: number,
            souls_consumed_average: number,
            damage_done_average: number,
            critical_hits_average: number,
            objective_kills_average: number,
            healing_done_average: number,
            self_healing_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            death_blossom_kills_average: number,
            melee_final_blows_average: number,
            time_spent_on_fire_average: number,
            objective_time_average: number,
            eliminations_average: number
        },
        general_stats: {
            critical_hits_most_in_game: number,
            kill_streak_best: number,
            multikill_best: number,
            objective_time_most_in_game: number,
            environmental_deaths: number,
            time_played: number,
            shots_fired: number,
            turrets_destroyed: number,
            deaths: number,
            healing_done_most_in_life: number,
            medals_silver: number,
            critical_hits_most_in_life: number,
            weapon_accuracy: number,
            healing_done: number,
            cards: number,
            healing_done_most_in_game: number,
            eliminations: number,
            objective_kills_most_in_game: number,
            critical_hits: number,
            eliminations_per_life: number,
            self_healing_most_in_game: number,
            multikills: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            melee_final_blow: number,
            medals_bronze: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            damage_done_most_in_life: number,
            critical_hit_accuracy: number,
            self_healing: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            objective_kills: number,
            time_spent_on_fire: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            medals: number,
            games_won: number,
            medals_gold: number,
            objective_time: number,
            time_spent_on_fire_most_in_game: number,
            shots_hit: number
        },
        hero_stats: {
            death_blossom_kills_most_in_game: number,
            melee_final_blow_most_in_game: number,
            souls_consumed_most_in_game: number,
            death_blossom_kills: number,
            souls_consumed: number
        }
    },
    tracer: {
        average_stats: {
            damage_done_average: number,
            deaths_average: number,
            pulse_bomb_kills_average: number,
            critical_hits_average: number,
            objective_kills_average: number,
            objective_time_average: number,
            eliminations_average: number,
            self_healing_average: number,
            final_blows_average: number,
            pulse_bombs_attached_average: number,
            solo_kills_average: number
        },
        general_stats: {
            medals_bronze: number,
            medals_gold: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            critical_hits_most_in_game: number,
            environmental_deaths: number,
            kill_streak_best: number,
            multikill_best: number,
            objective_time_most_in_game: number,
            self_healing: number,
            self_healing_most_in_game: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            shots_fired: number,
            turrets_destroyed: number,
            objective_kills: number,
            eliminations_per_life: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            eliminations: number,
            critical_hits_most_in_life: number,
            medals: number,
            weapon_accuracy: number,
            medals_silver: number,
            games_won: number,
            critical_hits: number,
            critical_hit_accuracy: number,
            objective_kills_most_in_game: number,
            deaths: number,
            multikill: number,
            objective_time: number,
            time_played: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            damage_done_most_in_life: number,
            shots_hit: number
        },
        hero_stats: {
            pulse_bomb_kills: number,
            pulse_bomb_kills_most_in_game: number,
            pulse_bombs_attached: number,
            pulse_bombs_attached_most_in_game: number
        }
    },
    ana: {
        average_stats: {
            deaths_average: number,
            defensive_assists_average: number,
            damage_done_average: number,
            enemies_slept_average: number,
            objective_kills_average: number,
            healing_done_average: number,
            self_healing_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            offensive_assists_average: number,
            melee_final_blows_average: number,
            time_spent_on_fire_average: number,
            objective_time_average: number,
            nano_boosts_applied_average: number,
            eliminations_average: number,
            nano_boost_assists_average: number
        },
        general_stats: {
            environmental_death: number,
            kill_streak_best: number,
            multikill_best: number,
            objective_time_most_in_game: number,
            enemies_slept_most_in_game: number,
            nano_boosts_applied_most_in_game: number,
            time_played: number,
            unscoped_shots: number,
            shots_fired: number,
            turrets_destroyed: number,
            healing_done_most_in_life: number,
            medals_silver: number,
            enemies_slept: number,
            weapon_accuracy: number,
            healing_done: number,
            unscoped_accuracy_best_in_game: number,
            healing_done_most_in_game: number,
            eliminations: number,
            objective_kills_most_in_game: number,
            objective_time: number,
            eliminations_per_life: number,
            self_healing_most_in_game: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            defensive_assists: number,
            solo_kill_most_in_game: number,
            solo_kills: number,
            medals_bronze: number,
            final_blows_most_in_game: number,
            offensive_assists_most_in_game: number,
            damage_done_most_in_life: number,
            self_healing: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            offensive_assists: number,
            objective_kills: number,
            time_spent_on_fire: number,
            weapon_accuracy_best_in_game: number,
            defensive_assists_most_in_game: number,
            medals: number,
            games_won: number,
            medals_gold: number,
            shots_hit: number,
            deaths: number,
            multikill: number,
            time_spent_on_fire_most_in_game: number,
            card: number,
            melee_final_blow: number,
            unscoped_hits: number
        },
        hero_stats: {
            scoped_shots: number,
            nano_boost_assists_most_in_game: number,
            unscoped_accuracy: number,
            scoped_accuracy: number,
            scoped_hits: number,
            nano_boost_assists: number,
            nano_boosts_applied: number,
            scoped_accuracy_best_in_game: number,
            melee_final_blow_most_in_game: number
        }
    },
    zenyatta: {
        average_stats: {
            deaths_average: number,
            defensive_assists_average: number,
            damage_done_average: number,
            critical_hits_average: number,
            objective_kills_average: number,
            healing_done_average: number,
            self_healing_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            offensive_assists_average: number,
            melee_final_blows_average: number,
            time_spent_on_fire_average: number,
            objective_time_average: number,
            eliminations_average: number
        },
        general_stats: {
            critical_hits_most_in_game: number,
            kill_streak_best: number,
            multikill_best: number,
            objective_time_most_in_game: number,
            time_played: number,
            shots_fired: number,
            turrets_destroyed: number,
            healing_done_most_in_life: number,
            medals_silver: number,
            critical_hits_most_in_life: number,
            weapon_accuracy: number,
            healing_done: number,
            cards: number,
            healing_done_most_in_game: number,
            eliminations: number,
            objective_kills_most_in_game: number,
            critical_hits: number,
            time_spent_on_fire: number,
            self_healing_most_in_game: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            defensive_assists: number,
            shots_hit: number,
            defensive_assists_most_in_game: number,
            medals_bronze: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            offensive_assists_most_in_game: number,
            damage_done_most_in_life: number,
            critical_hit_accuracy: number,
            self_healing: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            offensive_assists: number,
            melee_final_blows: number,
            objective_kills: number,
            eliminations_per_life: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            medals: number,
            transcendence_healing: number,
            games_won: number,
            medals_gold: number,
            deaths: number,
            multikill: number,
            time_spent_on_fire_most_in_game: number,
            objective_time: number
        },
        hero_stats: {
            melee_final_blow_most_in_game: number,
            transcendence_healing_best: number
        }
    },
    junkrat: {
        average_stats: {
            rip_tire_kills_average: number,
            deaths_average: number,
            time_spent_on_fire_average: number,
            melee_final_blows_average: number,
            damage_done_average: number,
            objective_kills_average: number,
            objective_time_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            eliminations_average: number
        },
        general_stats: {
            medals_bronze: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            kill_streak_best: number,
            multikill_best: number,
            objective_time_most_in_game: number,
            environmental_deaths: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            time_spent_on_fire_most_in_game: number,
            melee_final_blows: number,
            shots_fired: number,
            medals_gold: number,
            objective_kills: number,
            eliminations_per_life: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            eliminations: number,
            medals: number,
            weapon_accuracy: number,
            medals_silver: number,
            games_won: number,
            cards: number,
            turrets_destroyed: number,
            multikills: number,
            objective_kills_most_in_game: number,
            deaths: number,
            time_spent_on_fire: number,
            objective_time: number,
            environmental_kills: number,
            time_played: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            damage_done_most_in_life: number,
            shots_hit: number
        },
        hero_stats: {
            rip_tire_kills_most_in_game: number,
            rip_tire_kills: number,
            enemies_trapped: number,
            enemies_trapped_most_in_game: number,
            melee_final_blow_most_in_game: number,
            enemies_trapped_a_minute: number
        }
    },
    roadhog: {
        average_stats: {
            whole_hog_kills_average: number,
            deaths_average: number,
            enemies_hooked_average: number,
            damage_done_average: number,
            critical_hits_average: number,
            objective_kills_average: number,
            healing_done_average: number,
            self_healing_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            objective_time_average: number,
            eliminations_average: number
        },
        general_stats: {
            solo_kill_most_in_game: number,
            medals_bronze: number,
            medals_gold: number,
            critical_hits_most_in_game: number,
            final_blows_most_in_game: number,
            kill_streak_best: number,
            objective_time_most_in_game: number,
            self_healing: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            medals: number,
            shots_fired: number,
            critical_hits: number,
            objective_kills: number,
            eliminations_per_life: number,
            healing_done_most_in_life: number,
            solo_kills: number,
            eliminations: number,
            critical_hits_most_in_life: number,
            final_blows: number,
            weapon_accuracy: number,
            medals_silver: number,
            healing_done: number,
            games_won: number,
            objective_kills_most_in_game: number,
            healing_done_most_in_game: number,
            critical_hit_accuracy: number,
            turrets_destroyed: number,
            deaths: number,
            self_healing_most_in_game: number,
            objective_time: number,
            card: number,
            time_played: number,
            eliminations_most_in_life: number,
            weapon_accuracy_best_in_game: number,
            damage_done: number,
            damage_done_most_in_life: number,
            shots_hit: number
        },
        hero_stats: {
            whole_hog_kills_most_in_game: number,
            hook_accuracy: number,
            enemies_hooked: number,
            whole_hog_kills: number,
            enemies_hooked_most_in_game: number,
            hooks_attempted: number,
            hook_accuracy_best_in_game: number
        }
    },
    zarya: {
        average_stats: {
            projected_barriers_applied_average: number,
            deaths_average: number,
            damage_done_average: number,
            high_energy_kills_average: number,
            lifetime_average_energy: number,
            graviton_surge_kills_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            eliminations_average: number,
            time_spent_on_fire_average: number,
            average_energy_best_in_game: number,
            objective_kills_average: number,
            objective_time_average: number,
            damage_blocked_average: number
        },
        general_stats: {
            medals_bronze: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            kill_streak_best: number,
            time_spent_on_fire_most_in_game: number,
            objective_time_most_in_game: number,
            environmental_kill: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            shots_fired: number,
            medals_gold: number,
            objective_kills: number,
            eliminations_per_life: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            medals_silver: number,
            projected_barriers_applied_most_in_game: number,
            medals: number,
            weapon_accuracy: number,
            games_won: number,
            turrets_destroyed: number,
            eliminations: number,
            objective_kills_most_in_game: number,
            deaths: number,
            time_spent_on_fire: number,
            objective_time: number,
            time_played: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            damage_done_most_in_life: number,
            shots_hit: number
        },
        hero_stats: {
            damage_blocked_most_in_game: number,
            damage_blocked: number,
            lifetime_energy_accumulation: number,
            lifetime_graviton_surge_kills: number,
            projected_barriers_applied: number,
            high_energy_kills: number,
            graviton_surge_kills_most_in_game: number,
            energy_maximum: number,
            high_energy_kills_most_in_game: number
        }
    },
    orisa: {
        average_stats: {
            damage_amplified_average: number,
            offensive_assists_average: number,
            damage_blocked_average: number,
            melee_final_blows_average: number,
            eliminations_average: number,
            damage_done_average: number,
            objective_kills_average: number,
            objective_time_average: number,
            deaths_average: number,
            solo_kills_average: number,
            final_blows_average: number
        },
        general_stats: {
            medals_bronze: number,
            medals_gold: number,
            solo_kills_most_in_game: number,
            damage_amplified_most_in_game: number,
            final_blows_most_in_game: number,
            environmental_death: number,
            kill_streak_best: number,
            objective_time_most_in_game: number,
            damage_amplified: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            shield_generator_destroyed: number,
            offensive_assists: number,
            shots_fired: number,
            turrets_destroyed: number,
            objective_kills: number,
            eliminations_per_life: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            medals_silver: number,
            medals: number,
            weapon_accuracy: number,
            damage_blocked_most_in_game: number,
            games_won: number,
            critical_hits: number,
            eliminations: number,
            damage_blocked: number,
            objective_kills_most_in_game: number,
            deaths: number,
            melee_final_blow: number,
            objective_time: number,
            time_played: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            damage_done_most_in_life: number,
            shots_hit: number
        },
        hero_stats: {
            melee_final_blow_most_in_game: number
        }
    },
    pharah: {
        average_stats: {
            damage_done_average: number,
            barrage_kills_average: number,
            time_spent_on_fire_average: number,
            melee_final_blows_average: number,
            eliminations_average: number,
            objective_kills_average: number,
            rocket_direct_hits_average: number,
            objective_time_average: number,
            deaths_average: number,
            solo_kills_average: number,
            final_blows_average: number
        },
        general_stats: {
            medals_bronze: number,
            multikill_best: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            kill_streak_best: number,
            teleporter_pad_destroyed: number,
            objective_time_most_in_game: number,
            environmental_deaths: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            time_spent_on_fire_most_in_game: number,
            melee_final_blows: number,
            shots_fired: number,
            medals_gold: number,
            objective_kills: number,
            eliminations_per_life: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            eliminations: number,
            medals: number,
            weapon_accuracy: number,
            medals_silver: number,
            games_won: number,
            cards: number,
            turrets_destroyed: number,
            multikills: number,
            objective_kills_most_in_game: number,
            deaths: number,
            time_spent_on_fire: number,
            objective_time: number,
            environmental_kills: number,
            time_played: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            damage_done_most_in_life: number,
            shots_hit: number
        },
        hero_stats: {
            barrage_kills: number,
            barrage_kills_most_in_game: number,
            melee_final_blow_most_in_game: number,
            rocket_direct_hits_most_in_game: number,
            rocket_direct_hits: number
        }
    },
    mccree: {
        average_stats: {
            deaths_average: number,
            damage_done_average: number,
            critical_hits_average: number,
            objective_kills_average: number,
            objective_time_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            eliminations_average: number
        },
        general_stats: {
            objective_kill: number,
            medals_gold: number,
            solo_kill: number,
            damage_done_most_in_life: number,
            objective_time_most_in_game: number,
            medals_bronze: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            medals_silver: number,
            shots_fired: number,
            critical_hit_most_in_game: number,
            eliminations_per_life: number,
            eliminations: number,
            critical_hit_most_in_life: number,
            medals: number,
            weapon_accuracy: number,
            critical_hit: number,
            games_won: number,
            final_blow_most_in_game: number,
            critical_hit_accuracy: number,
            shots_hit: number,
            deaths: number,
            objective_time: number,
            time_played: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            kill_streak_best: number,
            objective_kill_most_in_game: number,
            solo_kill_most_in_game: number
        },
        hero_stats: {}
    },
    torbjorn: {
        average_stats: {
            deaths_average: number,
            turret_kills_average: number,
            armor_packs_created_average: number,
            critical_hits_average: number,
            objective_kills_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            torbjorn_kills_average: number,
            molten_core_kills_average: number,
            time_spent_on_fire_average: number,
            objective_time_average: number,
            eliminations_average: number,
            damage_done_average: number
        },
        general_stats: {
            medals_bronze: number,
            medals_gold: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            critical_hits_most_in_game: number,
            kill_streak_best: number,
            teleporter_pad_destroyed: number,
            objective_time_most_in_game: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            multikill_best: number,
            time_spent_on_fire_most_in_game: number,
            shots_fired: number,
            turrets_destroyed: number,
            objective_kills: number,
            eliminations_per_life: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            eliminations: number,
            critical_hits_most_in_life: number,
            medals: number,
            weapon_accuracy: number,
            medals_silver: number,
            games_won: number,
            cards: number,
            critical_hits: number,
            critical_hit_accuracy: number,
            environmental_death: number,
            objective_kills_most_in_game: number,
            deaths: number,
            time_spent_on_fire: number,
            multikill: number,
            objective_time: number,
            time_played: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            damage_done_most_in_life: number,
            shots_hit: number
        },
        hero_stats: {
            torbjorn_kills: number,
            molten_core_kills: number,
            torbjorn_kills_most_in_game: number,
            molten_core_kills_most_in_game: number,
            turret_kills: number,
            armor_packs_created: number
        }
    },
    mei: {
        average_stats: {
            blizzard_kills_average: number,
            deaths_average: number,
            damage_done_average: number,
            critical_hits_average: number,
            objective_kills_average: number,
            healing_done_average: number,
            self_healing_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            damage_blocked_average: number,
            time_spent_on_fire_average: number,
            melee_final_blows_average: number,
            eliminations_average: number,
            enemies_frozen_average: number,
            objective_time_average: number
        },
        general_stats: {
            medals_bronze: number,
            medals_gold: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            critical_hits_most_in_game: number,
            kill_streak_best: number,
            time_spent_on_fire_most_in_game: number,
            objective_time_most_in_game: number,
            self_healing: number,
            environmental_deaths: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            medals: number,
            melee_final_blows: number,
            shots_fired: number,
            turrets_destroyed: number,
            objective_kills: number,
            eliminations_per_life: number,
            healing_done_most_in_life: number,
            solo_kills: number,
            eliminations: number,
            critical_hits_most_in_life: number,
            final_blows: number,
            weapon_accuracy: number,
            medals_silver: number,
            healing_done: number,
            healing_done_most_in_game: number,
            games_won: number,
            critical_hits: number,
            critical_hit_accuracy: number,
            objective_kills_most_in_game: number,
            deaths: number,
            time_spent_on_fire: number,
            self_healing_most_in_game: number,
            objective_time: number,
            card: number,
            time_played: number,
            eliminations_most_in_life: number,
            weapon_accuracy_best_in_game: number,
            damage_done: number,
            damage_done_most_in_life: number,
            shots_hit: number
        },
        hero_stats: {
            enemies_frozen: number,
            damage_blocked_most_in_game: number,
            enemies_frozen_most_in_game: number,
            damage_blocked: number,
            blizzard_kills: number,
            melee_final_blow_most_in_game: number,
            blizzard_kills_most_in_game: number
        }
    },
    reinhardt: {
        average_stats: {
            deaths_average: number,
            fire_strike_kills_average: number,
            damage_done_average: number,
            objective_kills_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            earthshatter_kills_average: number,
            time_spent_on_fire_average: number,
            charge_kills_average: number,
            damage_blocked_average: number,
            objective_time_average: number,
            eliminations_average: number
        },
        general_stats: {
            medals_bronze: number,
            final_blows_most_in_game: number,
            environmental_death: number,
            kill_streak_best: number,
            time_spent_on_fire_most_in_game: number,
            objective_time_most_in_game: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            objective_kills: number,
            eliminations_per_life: number,
            solo_kills: number,
            medals_silver: number,
            medals: number,
            games_won: number,
            cards: number,
            medals_gold: number,
            eliminations: number,
            objective_kills_most_in_game: number,
            deaths: number,
            time_spent_on_fire: number,
            objective_time: number,
            time_played: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            damage_done_most_in_life: number,
            solo_kill_most_in_game: number
        },
        hero_stats: {
            damage_blocked_most_in_game: number,
            damage_blocked: number,
            fire_strike_kills_most_in_game: number,
            charge_kill_most_in_game: number,
            earthshatter_kill_most_in_game: number,
            charge_kills: number,
            earthshatter_kills: number,
            fire_strike_kills: number
        }
    },
    hanzo: {
        average_stats: {
            scatter_arrow_kills_average: number,
            deaths_average: number,
            time_spent_on_fire_average: number,
            damage_done_average: number,
            critical_hits_average: number,
            dragonstrike_kills_average: number,
            objective_kills_average: number,
            objective_time_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            eliminations_average: number
        },
        general_stats: {
            medals_bronze: number,
            medals_gold: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            critical_hits_most_in_game: number,
            kill_streak_best: number,
            time_spent_on_fire_most_in_game: number,
            objective_time_most_in_game: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            shots_fired: number,
            turrets_destroyed: number,
            objective_kills: number,
            eliminations_per_life: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            eliminations: number,
            critical_hits_most_in_life: number,
            medals: number,
            weapon_accuracy: number,
            medals_silver: number,
            games_won: number,
            critical_hits: number,
            critical_hit_accuracy: number,
            objective_kills_most_in_game: number,
            deaths: number,
            time_spent_on_fire: number,
            objective_time: number,
            time_played: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            damage_done_most_in_life: number,
            shots_hit: number
        },
        hero_stats: {
            scatter_arrow_kills: number,
            dragonstrike_kills: number,
            dragonstrike_kills_most_in_game: number,
            scatter_arrow_kills_most_in_game: number,
            recon_assists_most_in_game: number
        }
    },
    genji: {
        average_stats: {
            deaths_average: number,
            damage_done_average: number,
            critical_hits_average: number,
            objective_kills_average: number,
            healing_done_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            dragonblade_kills_average: number,
            time_spent_on_fire_average: number,
            melee_final_blows_average: number,
            damage_reflected_average: number,
            objective_time_average: number,
            eliminations_average: number
        },
        general_stats: {
            medals_bronze: number,
            medals_gold: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            critical_hits_most_in_game: number,
            kill_streak_best: number,
            multikill_best: number,
            objective_time_most_in_game: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            medals: number,
            time_spent_on_fire_most_in_game: number,
            melee_final_blows: number,
            shots_fired: number,
            turrets_destroyed: number,
            objective_kills: number,
            eliminations_per_life: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            eliminations: number,
            critical_hits_most_in_life: number,
            final_blows: number,
            weapon_accuracy: number,
            medals_silver: number,
            healing_done: number,
            healing_done_most_in_game: number,
            games_won: number,
            critical_hits: number,
            critical_hit_accuracy: number,
            environmental_death: number,
            objective_kills_most_in_game: number,
            deaths: number,
            time_spent_on_fire: number,
            multikill: number,
            objective_time: number,
            time_played: number,
            eliminations_most_in_life: number,
            healing_done_most_in_life: number,
            damage_done: number,
            damage_done_most_in_life: number,
            shots_hit: number
        },
        hero_stats: {
            dragonblade_kills_most_in_game: number,
            damage_reflected_most_in_game: number,
            dragonblades: number,
            dragonblade_kills: number,
            damage_reflected: number,
            melee_final_blow_most_in_game: number
        }
    },
    winston: {
        average_stats: {
            jump_pack_kills_average: number,
            deaths_average: number,
            damage_done_average: number,
            objective_kills_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            damage_blocked_average: number,
            time_spent_on_fire_average: number,
            melee_final_blows_average: number,
            melee_kills_average: number,
            players_knocked_back_average: number,
            objective_time_average: number,
            eliminations_average: number,
            primal_rage_kills_average: number
        },
        general_stats: {
            medals_bronze: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            kill_streak_best: number,
            multikill_best: number,
            objective_time_most_in_game: number,
            environmental_deaths: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            primal_rage_kills_most_in_game: number,
            medals_gold: number,
            objective_kills: number,
            eliminations_per_life: number,
            time_spent_on_fire_most_in_game: number,
            solo_kills: number,
            medals_silver: number,
            medals: number,
            primal_rage_kills: number,
            games_won: number,
            cards: number,
            turrets_destroyed: number,
            eliminations: number,
            objective_kills_most_in_game: number,
            deaths: number,
            time_spent_on_fire: number,
            multikill: number,
            objective_time: number,
            environmental_kills: number,
            time_played: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            damage_done_most_in_life: number,
            melee_final_blow: number
        },
        hero_stats: {
            damage_blocked_most_in_game: number,
            damage_blocked: number,
            players_knocked_back: number,
            melee_kills: number,
            players_knocked_back_most_in_game: number,
            jump_pack_kills: number,
            jump_pack_kills_most_in_game: number,
            melee_final_blow_most_in_game: number,
            melee_kills_most_in_game: number
        }
    },
    bastion: {
        average_stats: {
            deaths_average: number,
            recon_kills_average: number,
            damage_done_average: number,
            critical_hits_average: number,
            objective_kills_average: number,
            healing_done_average: number,
            self_healing_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            sentry_kills_average: number,
            tank_kills_average: number,
            time_spent_on_fire_average: number,
            objective_time_average: number,
            eliminations_average: number
        },
        general_stats: {
            medals_bronze: number,
            medals_gold: number,
            time_spent_on_fire: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            critical_hits_most_in_game: number,
            kill_streak_best: number,
            multikill_best: number,
            objective_time_most_in_game: number,
            self_healing: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            medals: number,
            medals_silver: number,
            time_spent_on_fire_most_in_game: number,
            shots_fired: number,
            healing_done_most_in_game: number,
            objective_kills: number,
            eliminations_per_life: number,
            healing_done_most_in_life: number,
            solo_kills: number,
            eliminations: number,
            critical_hits_most_in_life: number,
            final_blows: number,
            weapon_accuracy: number,
            healing_done: number,
            turret_destroyed: number,
            games_won: number,
            cards: number,
            critical_hits: number,
            critical_hit_accuracy: number,
            objective_kills_most_in_game: number,
            deaths: number,
            objective_time: number,
            self_healing_most_in_game: number,
            multikills: number,
            time_played: number,
            eliminations_most_in_life: number,
            weapon_accuracy_best_in_game: number,
            damage_done: number,
            damage_done_most_in_life: number,
            shots_hit: number
        },
        hero_stats: {
            tank_kills_most_in_game: number,
            sentry_kills: number,
            recon_kills_most_in_game: number,
            tank_kills: number,
            sentry_kills_most_in_game: number,
            recon_kills: number
        }
    },
    soldier76: {
        average_stats: {
            deaths_average: number,
            damage_done_average: number,
            critical_hits_average: number,
            objective_kills_average: number,
            healing_done_average: number,
            self_healing_average: number,
            final_blows_average: number,
            solo_kills_average: number,
            time_spent_on_fire_average: number,
            melee_final_blows_average: number,
            tactical_visor_kills_average: number,
            objective_time_average: number,
            eliminations_average: number,
            helix_rockets_kills_average: number
        },
        general_stats: {
            critical_hits_most_in_game: number,
            kill_streak_best: number,
            multikill_best: number,
            objective_time_most_in_game: number,
            environmental_deaths: number,
            time_played: number,
            shots_fired: number,
            turrets_destroyed: number,
            healing_done_most_in_life: number,
            medals_silver: number,
            critical_hits_most_in_life: number,
            weapon_accuracy: number,
            healing_done: number,
            cards: number,
            healing_done_most_in_game: number,
            eliminations: number,
            objective_kills_most_in_game: number,
            critical_hits: number,
            eliminations_per_life: number,
            self_healing_most_in_game: number,
            multikills: number,
            eliminations_most_in_life: number,
            final_blows: number,
            damage_done: number,
            shots_hit: number,
            medals_bronze: number,
            solo_kills_most_in_game: number,
            final_blows_most_in_game: number,
            damage_done_most_in_life: number,
            critical_hit_accuracy: number,
            self_healing: number,
            damage_done_most_in_game: number,
            eliminations_most_in_game: number,
            melee_final_blows: number,
            objective_kills: number,
            time_spent_on_fire: number,
            weapon_accuracy_best_in_game: number,
            solo_kills: number,
            medals: number,
            games_won: number,
            medals_gold: number,
            deaths: number,
            time_spent_on_fire_most_in_game: number,
            objective_time: number
        },
        hero_stats: {
            helix_rockets_kills_most_in_game: number,
            tactical_visor_kills: number,
            helix_rockets_kills: number,
            melee_final_blows_most_in_game: number,
            tactical_visor_kills_most_in_game: number,
            biotic_fields_deployed: number,
            biotic_field_healing_done: number
        }
    }
}