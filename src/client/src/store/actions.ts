import {createAction, createAsyncAction} from "typesafe-actions";
import {Guild} from "../models/guild";


const homeOpened = createAction('@@home-opened')<{ text: string }>();
const guildOpened = createAction('@@guild-opened')();

const loadGuild = createAsyncAction(
    '@@load-guild/request',
    '@@load-guild/success',
    '@@load-guild/failure'
)<{}, Guild, Error>();

const login = createAction('@@login')<{ name: string, password: string }>();
const emptyAction = createAction('@@empty-action')<{ text: string }>();

export const Actions = {
    home: {
        login,
        homeOpened,
        emptyAction
    },
    guild: {
        guildOpened,
        loadGuild
    }
};