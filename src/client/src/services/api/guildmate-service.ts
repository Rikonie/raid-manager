
import {HttpClient} from "../api/http-client";
import {GuildMate} from "../../models/guildmate";

export interface IGuildMateService {
    GetGuildMateInfo(): Promise<GuildMate[]>
}

export class GuildMateService implements IGuildMateService{

    constructor(private readonly httpClient: HttpClient){
    }


    GetGuildMateInfo(): Promise<GuildMate[]> {
        return this.httpClient.get<any>('/members', {}).then((r:any) =>{
            return r.map((i: any) => {
                return new GuildMate(
                   i?.character?.name,
                   i?.character?.id,
                   i?.character?.playable_class?.id,
                   i.rank
                )
            })

        } )
    }

}