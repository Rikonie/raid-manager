import {createAction} from "typesafe-actions";

export const homeOpened = createAction('@@home-opened')<{text: string}>();
export const login = createAction('@@login')<{name: string, password: string}>();
const emptyAction = createAction('@@empty-action')<{text: string}>();

export const Actions = {
    home: {
        login,
        homeOpened,
        emptyAction
    }
};