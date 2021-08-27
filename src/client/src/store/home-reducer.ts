import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";
import {User} from "../models/user";

const opened = createReducer<string>('loading')
    .handleAction(
        Actions.home.homeOpened, (state: any, action: any) => {
        return action.payload.text
    });

const user = createReducer<User>(null)
    .handleAction(Actions.home.login, (state, action) => {
        return {name: action.payload.name, password: action.payload.password} as User;
    });

export const homeReducer = () =>
    combineReducers({
        opened,
        user
    });

