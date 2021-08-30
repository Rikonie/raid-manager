import {RootEpic} from "./root-epic";
import {debounce, debounceTime, filter, ignoreElements, switchMap, tap} from "rxjs/operators";
import {isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";
import {of} from "rxjs";

const guildMatePageOpened: RootEpic = (action$, _, {guildMateService}) =>
    action$.pipe(
        filter(isActionOf(Actions.guildMate.guildMateOpened)),
        debounceTime(5000),
        switchMap((action) => {
            return guildMateService.GetGuildMateInfo().then(r => Actions.guildMate.loadGuildMate.success(r))
        })
    );

export const guildMateEpics = [
    guildMatePageOpened
];