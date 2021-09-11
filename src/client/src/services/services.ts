import {LocalStorageService} from "./localStorage";
import {HttpClient} from "./api/http-client";
import {IHomeApi} from "./api/home-api";
import {IGuildService} from "./guild-service";
import {IGuildmatesService} from "./guildmate-service";
import {IRaidersService} from "./raider-service";
import {IRaidEventService} from "./raid-event-service";

export interface Services {
    homeApi: IHomeApi,
    localStorageService: LocalStorageService,
    httpClient: HttpClient,
    guildService: IGuildService,
    guildmatesService: IGuildmatesService,
    raidersService: IRaidersService,
    raidEventService: IRaidEventService
}