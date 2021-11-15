import {ActionType, StateType} from "typesafe-actions";
import {Actions} from "../store/actions";
import { combineReducers } from "redux";
import {homeReducer} from "../store/home-reducer";
import {guildReducer} from "../store/guild-reducer";
import {guildmateReducer} from "../store/guildmate-reducer";
import {raidersReducer} from "../store/raider-reducer";
import {raidEventReducer} from "../store/raid-event-reducer";

export const rootReducer = () =>
    ///Comment in main
    combineReducers({
        home: homeReducer(),
        guild: guildReducer(),
        guildmate: guildmateReducer(),
        raider: raidersReducer(),
        raidEvent: raidEventReducer(),
    });

export type RootState = StateType<ReturnType<typeof rootReducer>>;
export type RootAction = ActionType<typeof Actions>;