import {RootEpic} from "./root-epic";
import {debounce, debounceTime, filter, ignoreElements, switchMap, tap, map, catchError} from "rxjs/operators";
import {isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";
import {of} from "rxjs";

// const guildmatePageOpened: RootEpic = (action$, _, {guildmatesService}) =>
//     action$.pipe(
//         filter(isActionOf(Actions.guild.guildOpened)),
//         switchMap((action) => {
//             return guildmatesService.GetGuildmatesInfo().then(r => Actions.guildmate.loadGuildmates.success(r))
//         })
//     );

const guildmatePageOpened: RootEpic = (action$, _, {}) =>
    action$.pipe(
        filter(isActionOf(Actions.guild.guildOpened)),
        map((action) => {
            return  Actions.guildmate.loadGuildmatesPage.request({page:1, size:10})
        }),
        catchError(x=>{
            return of(Actions.guildmate.loadGuildmatesPage.failure(x))
        })
    );

const guildmatePageLoad: RootEpic = (action$, _, {guildmatesService}) =>
    action$.pipe(
        filter(isActionOf(Actions.guildmate.loadGuildmatesPage.request)),
        switchMap((action) => {
            return guildmatesService.GetGuildmatesInfoPage(action.payload.page, action.payload.size).then(r => Actions.guildmate.loadGuildmatesPage.success(r))
        }),
        catchError(x=>{
            return of(Actions.guildmate.loadGuildmatesPage.failure(x))
        })
    );

export const guildmateEpics = [
    guildmatePageOpened,
    guildmatePageLoad
];