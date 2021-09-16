
import {HttpClient} from "./api/http-client";
import {Guildmate} from "../models/guildmate";

export interface IGuildmatesService {
    GetGuildmatesInfo(): Promise<Guildmate[]>
    GetGuildmatesInfoPage(page: number, size: number): Promise<{guildmates: Guildmate[], count: number}>
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

    GetGuildmatesInfoPage(page: number, size: number): Promise<{guildmates: Guildmate[], count: number}> {
        return this.httpClient.get<any>
        ('/guildmates/' + page + "/" + size, {}).then((r:any) =>{

            let a = r.guildmates.map((i: any) => {
                return new Guildmate(
                    i?.id,
                    i?.name,
                    i?.classId,
                    i?.rank
                )
            });
            let p = r.count;
            return {
                guildmates: a,
                count: p
            };

        } )
    }

}