import {LocalStorageService} from "./localStorage";
import {HttpClient} from "./api/http-client";
import {IHomeApi} from "./api/home-api";
import {IGuildService} from "./guild-service";

export interface Services {
    homeApi: IHomeApi,
    localStorageService: LocalStorageService,
    httpClient: HttpClient,
    guildService: IGuildService
}