import {combineEpics} from "redux-observable";
import {homeEpics} from "./home-epic";
import {guildEpics} from "./guild-epic";

export const rootEpics = () =>
    combineEpics(
        ...homeEpics,
        ...guildEpics,
    );