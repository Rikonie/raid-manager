import {ActionType, StateType} from "typesafe-actions";
import {Actions} from "../store/actions";
import { combineReducers } from "redux";
import {homeReducer} from "../store/home-reducer";
import {guildReducer} from "../store/guild-reducer";
import {guildmateReducer} from "../store/guildmate-reducer";

export const rootReducer = () =>
    combineReducers({
        home: homeReducer(),
        guild: guildReducer(),
        guildmate: guildmateReducer()
    });

export type RootState = StateType<ReturnType<typeof rootReducer>>;
export type RootAction = ActionType<typeof Actions>;