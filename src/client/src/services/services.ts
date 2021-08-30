import {LocalStorageService} from "./localStorage";
import {HttpClient} from "./api/http-client";
import {IHomeApi} from "./api/home-api";
import {IGuildService} from "./guild-service";
import {IGuildMateService} from "./api/guildmate-service";

export interface Services {
    homeApi: IHomeApi,
    localStorageService: LocalStorageService,
    httpClient: HttpClient,
    guildService: IGuildService,
    guildMateService: IGuildMateService,

}