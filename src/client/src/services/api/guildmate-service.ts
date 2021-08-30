
import {HttpClient} from "../api/http-client";
import {Guildmate} from "../../models/guildmate";

export interface IGuildmatesService {
    GetGuildmatesInfo(): Promise<Guildmate[]>
}

export class GuildmatesService implements IGuildmatesService{

    constructor(private readonly httpClient: HttpClient){
    }


    GetGuildmatesInfo(): Promise<Guildmate[]> {
        return this.httpClient.get<any>('/members', {}).then((r:any) =>{
            return r.map((i: any) => {
                return new Guildmate(
                   i?.character?.name,
                   i?.character?.id,
                   i?.character?.playable_class?.id,
                   i.rank
                )
            })

        } )
    }

}