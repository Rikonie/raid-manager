import {RootEpic} from "./root-epic";
import {debounce, debounceTime, filter, ignoreElements, switchMap, tap} from "rxjs/operators";
import {isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";
import {of} from "rxjs";

const guildmatePageOpened: RootEpic = (action$, _, {guildmatesService}) =>
    action$.pipe(
        filter(isActionOf(Actions.guild.guildOpened)),
        switchMap((action) => {
            return guildmatesService.GetGuildmatesInfo().then(r => Actions.guildmate.loadGuildmates.success(r))
        })
    );

export const guildmateEpics = [
    guildmatePageOpened
];