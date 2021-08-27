import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";
import {Guild} from "../models/guild";

const guild = createReducer<Guild>(null)
    .handleAction(Actions.guild.loadGuild.success, (state, action) => {
        return  action.payload;
    });

export const guildReducer = () =>
    combineReducers({
        guild
    });

