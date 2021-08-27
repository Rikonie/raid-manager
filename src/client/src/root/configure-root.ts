import { Store, createStore, applyMiddleware } from "redux";
import {RootAction, rootReducer, RootState} from "./root";
import {Services} from "../services/services";
import {createEpicMiddleware} from "redux-observable";
import {rootEpics} from "../epics/epics";
import {HttpClient} from "../services/api/http-client";
import {LocalStorageService} from "../services/localStorage";
import {of} from "rxjs";
import {HomeApi} from "../services/api/home-api";
import {GuildService} from "../services/guild-service";

export interface RootConfig {
    store: Store<RootState, RootAction>;
}

export async function configureRoot(): Promise<RootConfig> {

    const endpoint = await getConfig();
    const httpClient = new HttpClient(endpoint);
    const homeApi = new HomeApi(httpClient);
    const guildService = new GuildService(httpClient);

    const localStorageService = new LocalStorageService();

    const epicMiddleware = createEpicMiddleware<
        RootAction,
        RootAction,
        RootState,
        Services
        >({
        dependencies: {
            homeApi: homeApi,
            localStorageService: localStorageService,
            httpClient: httpClient,
            guildService: guildService
        },
    });

    const store = createStore<RootState, RootAction, unknown, unknown>(
        rootReducer(),
        {  },
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpics());
    return { store };
}

function getConfig(): Promise<string> {
    return  of("http://localhost:3000").toPromise();
}
