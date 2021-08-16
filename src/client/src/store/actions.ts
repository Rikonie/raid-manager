import {createAction} from "typesafe-actions";

const homeOpened = createAction('@@home-opened')<{text: string}>();
const emptyAction = createAction('@@empty-action')<{text: string}>();

export const Actions = {
    home: {
        homeOpened,
        emptyAction
    }
};