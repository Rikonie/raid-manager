import {createAction, createAsyncAction} from "typesafe-actions";
import {Guild} from "../models/guild";
import {Guildmate} from "../models/guildmate";
import {Raider} from "../models/raider";
import {Raid} from "../components/create-raid/create-raid-component";


const homeOpened = createAction('@@home-opened')<{ text: string }>();
const guildOpened = createAction('@@guild-opened')();
const raiderOpened = createAction('@@raider-opened')();

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

const loadRaiders = createAsyncAction(
    '@@load-raider/request',
    '@@load-raider/success',
    '@@load-raider/failure'
)<{page: number}, Raider[], Error>();

const createRaider = createAsyncAction(
    '@@create-raider/request',
    '@@create-raider/success',
    '@@create-raider/failure'
)<Raider, {}, Error>();

const deleteRaider = createAsyncAction(
    '@@delete-raider/request',
    '@@delete-raider/success',
    '@@delete-raider/failure'
)<number, number, Error>();

const login = createAction('@@login')<{ name: string, password: string }>();
const emptyAction = createAction('@@empty-action')<{ text: string }>();
const createRaid = createAction('@@create-raid')<Raid>();
const clearCreateRaider = createAction('@@clear-raider')();

export const Actions = {
    home: {
        login,
        homeOpened,
        emptyAction,
        createRaid
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
    raider: {
        raiderOpened,
        loadRaiders,
        createRaider,
        deleteRaider,
        clearCreateRaider
    }
};