import {createReducer} from "typesafe-actions";
import {Raider} from "../models/raider";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const raidersList = createReducer<Raider[]>(null)
    .handleAction(Actions.raider.loadRaiders.success, (state, action) => {
        return action.payload;
    })
    .handleAction(Actions.raider.deleteRaider.success, (state : Raider[], action) => {
        const raider = state.find(r=>r.id == action.payload);
        const index = state.indexOf(raider, 0);
        if (index > -1) {
            state.splice(index, 1);
        }
        return [...state];
    });

const createRaiderStatus = createReducer<string>(null)
    .handleAction(Actions.raider.createRaider.success, () => {
        return "Рейдер успешно создан";
    })
    .handleAction(Actions.raider.createRaider.failure, () => {
        return "Ошибка: такой рейдер уже существует";
    })
    .handleAction(Actions.raider.deleteRaider.success, () => {
        return "Успешно";
    })
    .handleAction(Actions.raider.deleteRaider.failure, () => {
        return "Ошибка";
    })
    .handleAction(Actions.raider.clearCreateRaider, ()=>{
        return null
    });

export const raidersReducer = () =>
    combineReducers({
        raidersList,
        createRaiderStatus
    });