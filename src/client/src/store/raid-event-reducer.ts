import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const createRaidStatus = createReducer<string>(null)
    .handleAction(Actions.raidEvent.createRaid.success, () => {
        return "Событие успешно создано";
    })
    .handleAction(Actions.raidEvent.createRaid.failure, () => {
        return "Ошибка";
    })
    .handleAction(Actions.raidEvent.clearCreateRaidEvent, ()=>{
    return null
    });

export const raidEventReducer = () =>
    combineReducers ({
        createRaidStatus
    });