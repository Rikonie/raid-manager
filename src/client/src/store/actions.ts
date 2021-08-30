import {createAction, createAsyncAction} from "typesafe-actions";
import {Guild} from "../models/guild";
import {GuildMate} from "../models/guildmate";


const homeOpened = createAction('@@home-opened')<{ text: string }>();
const guildOpened = createAction('@@guild-opened')();
const guildMateOpened = createAction('@@guildMate-opened')();

const loadGuild = createAsyncAction(
    '@@load-guild/request',
    '@@load-guild/success',
    '@@load-guild/failure'
)<{}, Guild, Error>();

const loadGuildMate = createAsyncAction(
    '@@load-guildMate/request',
    '@@load-guildMate/success',
    '@@load-guildMate/failure'
)<{}, GuildMate[], Error>();


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
    guildMate: {
        guildMateOpened,
        loadGuildMate
    }
};