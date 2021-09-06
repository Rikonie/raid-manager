import {combineEpics} from "redux-observable";
import {homeEpics} from "./home-epic";
import {guildEpics} from "./guild-epic";
import {guildmateEpics} from "./guildmate-epic";
import {raiderEpics} from "./raider-epic";

export const rootEpics = () =>
    combineEpics(
        ...homeEpics,
        ...guildEpics,
        ...guildmateEpics,
        ...raiderEpics,
    );