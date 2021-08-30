
import {HttpClient} from "../api/http-client";
import {Guildmate} from "../../models/guildmate";

export interface IGuildmatesService {
    GetGuildmatesInfo(): Promise<Guildmate[]>
}

export class GuildmatesService implements IGuildmatesService{

    constructor(private readonly httpClient: HttpClient){
    }


    GetGuildmatesInfo(): Promise<Guildmate[]> {
        return this.httpClient.get<any>('/guildmates', {}).then((r:any) =>{
            return r.map((i: any) => {
                return new Guildmate(
                   i?.name,
                   i?.id,
                   i?.classId,
                   i?.rank
                )
            })

        } )
    }

}