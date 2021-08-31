
import {HttpClient} from "../api/http-client";
import {Guildmate} from "../../models/guildmate";

export interface IGuildmatesService {
    GetGuildmatesInfo(): Promise<Guildmate[]>
    GetGuildmatesInfoPage(page: number): Promise<Guildmate[]>
}

export class GuildmatesService implements IGuildmatesService{

    constructor(private readonly httpClient: HttpClient){
    }


    GetGuildmatesInfo(): Promise<Guildmate[]> {
        return this.httpClient.get<any>('/guildmates', {}).then((r:any) =>{
            return r.map((i: any) => {
                return new Guildmate(
                   i?.id,
                   i?.name,
                   i?.classId,
                   i?.rank
                )
            })

        } )
    }

    GetGuildmatesInfoPage(page: number): Promise<Guildmate[]> {
        return this.httpClient.get<any>('/guildmates/' + page, {}).then((r:any) =>{
            return r.map((i: any) => {
                return new Guildmate(
                    i?.id,
                    i?.name,
                    i?.classId,
                    i?.rank
                )
            })

        } )
    }

}