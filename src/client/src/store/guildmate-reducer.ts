import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";
import {GuildMate} from "../models/guildmate";

const guildMate = createReducer<GuildMate[]>(null)
    .handleAction(Actions.guildMate.loadGuildMate.success, (state, action) => {
        return  action.payload;
    });

export const guildMateReducer = () =>
    combineReducers({
        guildMate
    });