import {RootEpic} from "./root-epic";
import {filter, ignoreElements, tap} from "rxjs/operators";
import {isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";

const homePageOpened: RootEpic = (action$, _) =>
    action$.pipe(
        filter(isActionOf(Actions.home.homeOpened)),
        tap((action) => {
            console.log('Epic works :', action.payload.text);
        }),
        ignoreElements()
    );

export const homeEpics = [
    homePageOpened
];