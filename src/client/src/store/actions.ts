import {createAction, createAsyncAction} from "typesafe-actions";
import {Guild} from "../models/guild";
import {Guildmate} from "../models/guildmate";


const homeOpened = createAction('@@home-opened')<{ text: string }>();
const guildOpened = createAction('@@guild-opened')();

const loadGuild = createAsyncAction(
    '@@load-guild/request',
    '@@load-guild/success',
    '@@load-guild/failure'
)<{}, Guild, Error>();

const loadGuildmates = createAsyncAction(
    '@@load-guildmate/request',
    '@@load-guildmate/success',
    '@@load-guildmate/failure'
)<{}, Guildmate[], Error>();

const loadGuildmatesPage = createAsyncAction(
    '@@load-guildmate/request',
    '@@load-guildmate/success',
    '@@load-guildmate/failure'
)<{page: number}, Guildmate[], Error>();


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
    },
    guildmate: {
        guildOpened,
        loadGuildmates,
        loadGuildmatesPage
    },
};