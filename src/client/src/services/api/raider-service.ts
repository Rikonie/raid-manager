import {Raider} from "../../models/raider";
import {HttpClient} from "./http-client";

export interface IRaidersService {
    GetRaidersInfo(): Promise<Raider[]>
    GetRaidersInfoPage(page: number): Promise<Raider[]>
    CreateRaider(raider:Raider): Promise<Raider>
    DeleteRaider(id:number): Promise<number>
}

export class RaidersService implements IRaidersService{

    constructor(private readonly httpClient: HttpClient){
    }


    GetRaidersInfo(): Promise<Raider[]> {
        return this.httpClient.get<any>('/raiders', {}).then((r:any) =>{
            return r.map((i: any) => {
                return new Raider(
                    i?.id,
                    i?.name,
                    i?.classId,
                    i?.rank
                )
            });
        } );
    }

    GetRaidersInfoPage(page: number): Promise<Raider[]> {
        return this.httpClient.get<any>('/raiders', {}).then((r:any) =>{
            return r.map((i: any) => {
                return new Raider(
                    i?.id,
                    i?.name,
                    i?.classId,
                    i?.rank
                )
            })

        } )
    }

        CreateRaider(raider: Raider) : Promise<Raider> {
            return this.httpClient.post<Raider>(
                '/raiders',
                raider
        ).then()
    }

    DeleteRaider (id: number) : Promise<number> {
        return this.httpClient.delete<number>(
            '/raiders/delete/'+id,
            {}
        ).then();
    }

    CreateEventRaider () : Promise<number> {
        return this.httpClient.post<any>(
            '/events',
            {
                id: 1,
                dateTimeStart: (new Date()).getTime(),
                dateTimeEnd: (new Date()).getTime(),
                description: 'test'
            }
        ).then();
    }
}