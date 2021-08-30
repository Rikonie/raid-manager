import {Guild} from "../models/guild";
import {HttpClient} from "./api/http-client";

export interface IGuildService {
    GetGuidInfo(): Promise<Guild>
}

export class GuildService implements IGuildService{

    constructor(private readonly httpClient: HttpClient){
    }


    GetGuidInfo(): Promise<Guild> {
        return this.httpClient.get<any>('/guild', {}).then((r:any) =>{
            return new Guild(
                r?.id,
                r?.faction?.name,
                r?.name,
                r.realm.name
            )
        } )
    }

}