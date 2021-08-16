import {combineEpics} from "redux-observable";
import {homeEpics} from "./home-epic";

export const rootEpics = () =>
    combineEpics(
        ...homeEpics
    );