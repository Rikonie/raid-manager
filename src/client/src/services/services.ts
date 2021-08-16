import {LocalStorageService} from "./localStorage";
import {HttpClient} from "./api/http-client";
import {IHomeApi} from "./api/home-api";

export interface Services {
    homeApi: IHomeApi,
    localStorageService: LocalStorageService,
    httpClient: HttpClient
}