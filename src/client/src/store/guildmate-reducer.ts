import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";
import {Guildmate} from "../models/guildmate";

const guildmateList = createReducer<Guildmate[]>(null)
    .handleAction(Actions.guildmate.loadGuildmates.success, (state, action) => {
        return  action.payload;
    });

export const guildmateReducer = () =>
    combineReducers({
        guildmateList
    });