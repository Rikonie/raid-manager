import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const opened = createReducer<string>('loading')
    .handleAction(Actions.home.homeOpened, (state: any, action: any) => {
        return action.payload.text
    });

export const homeReducer = () =>
    combineReducers({
        opened
    });