import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";
import {Raid} from "../models/raidEvent";

const createRaidStatus = createReducer<string>(null)
    .handleAction(Actions.raidEvent.createRaid.success, () => {
        return "Событие успешно создано";
    })
    .handleAction(Actions.raidEvent.createRaid.failure, () => {
        return "Ошибка";
    })
    .handleAction(Actions.raidEvent.clearCreateRaidEvent, () => {
        return null
    });

const eventList = createReducer<Raid[]>(null)
    .handleAction(Actions.calendar.loadEvents.success, (state, action) => {
        console.log('reducer',action.payload);
        return action.payload;
    });

export const raidEventReducer = () =>
    combineReducers({
        createRaidStatus,
        eventList
    });