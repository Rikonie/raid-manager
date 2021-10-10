import {createAction, createAsyncAction} from "typesafe-actions";
import {Guild} from "../models/guild";
import {Guildmate} from "../models/guildmate";
import {Raider} from "../models/raider";
import {Raid} from "../models/raidEvent";


const homeOpened = createAction('@@home-opened')<{ text: string }>();
const guildOpened = createAction('@@guild-opened')();
const raiderOpened = createAction('@@raider-opened')();
const calendarOpened = createAction('@@calendar-opened')();

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

const loadEvents = createAsyncAction(
    '@@load-events/request',
    '@@load-events/success',
    '@@load-events/failure'
)<{}, Raid[], Error>();

const loadGuildmatesPage = createAsyncAction(
    '@@load-guildmate/request',
    '@@load-guildmate/success',
    '@@load-guildmate/failure'
)<{page: number, size: number}, {guildmates: Guildmate[], count: number}, Error>();

const loadRaiders = createAsyncAction(
    '@@load-raider/request',
    '@@load-raider/success',
    '@@load-raider/failure'
)<{page: number, size: number}, {raiders: Raider[], count: number}, Error>();

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

const createRaid = createAsyncAction(
    '@@create-raid/request',
    '@@create-raid/success',
    '@@create-raid/failure'
)<Raid, {}, Error>();

const login = createAction('@@login')<{ name: string, password: string }>();
const emptyAction = createAction('@@empty-action')<{ text: string }>();
const clearCreateRaider = createAction('@@clear-raider')();
const clearCreateRaidEvent = createAction('@@clear-raid')();

export const Actions = {
    home: {
        login,
        homeOpened,
        emptyAction,
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
    },
    raidEvent: {
        createRaid,
        clearCreateRaidEvent,
    },
    calendar: {
        calendarOpened,
        loadEvents,
    }
};