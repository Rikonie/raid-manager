import {ActionType, StateType} from "typesafe-actions";
import {Actions} from "../store/actions";
import { combineReducers } from "redux";
import {homeReducer} from "../store/home-reducer";


export const rootReducer = () =>
    combineReducers({
        home: homeReducer()
    });

export type RootState = StateType<ReturnType<typeof rootReducer>>;
export type RootAction = ActionType<typeof Actions>;