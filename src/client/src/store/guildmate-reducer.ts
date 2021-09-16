import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";
import {Guildmate} from "../models/guildmate";

const guildmateListPage = createReducer<Guildmate[]>(null)
    .handleAction(Actions.guildmate.loadGuildmatesPage.success, (state, action) => {
        return  action.payload.guildmates;
    });
const guildmateCount = createReducer<number>(0)
    .handleAction(Actions.guildmate.loadGuildmatesPage.success, (state, action) => {
        return  action.payload.count;
    });

export const guildmateReducer = () =>
    combineReducers({
        guildmateListPage,
        guildmateCount
    });