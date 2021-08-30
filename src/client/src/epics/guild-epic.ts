import {RootEpic} from "./root-epic";
import {debounce, debounceTime, filter, ignoreElements, switchMap, tap} from "rxjs/operators";
import {isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";
import {of} from "rxjs";

const guildPageOpened: RootEpic = (action$, _, {guildService}) =>
    action$.pipe(
        filter(isActionOf(Actions.guild.guildOpened)),
        switchMap((action) => {
            return guildService.GetGuidInfo().then(r => Actions.guild.loadGuild.success(r))
        })
    );



export const guildEpics = [
    guildPageOpened
];