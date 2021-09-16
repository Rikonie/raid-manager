import {Raider} from "../models/raider";
import {HttpClient} from "./api/http-client";

export interface IRaidersService {
    GetRaidersInfo(): Promise<Raider[]>
    GetRaidersInfoPage(page: number, size: number): Promise<{raiders: Raider[], count: number}>
    CreateRaider(raider:Raider): Promise<Raider>
    DeleteRaider(id:number): Promise<number>
}

export class RaidersService implements IRaidersService {

    constructor(private readonly httpClient: HttpClient) {
    }


    GetRaidersInfo(): Promise<Raider[]> {
        return this.httpClient.get<any>('/raiders', {}).then((r: any) => {
            return r.map((i: any) => {
                return new Raider(
                    i?.id,
                    i?.name,
                    i?.classId,
                    i?.rank
                )
            });
        });
    }

    GetRaidersInfoPage(page: number, size: number): Promise<{raiders: Raider[], count: number}> {
        return this.httpClient.get<any>
        ('/raiders/' + page + "/" + size, {}).then((r: any) => {
            let a = r.raiders.map((i: any) => {
                console.log(a);
                return new Raider(
                    i?.id,
                    i?.name,
                    i?.classId,
                    i?.rank
                )
            });
            let p = r.count;
           return {
               raiders: a,
               count: p
           }
        })

        }

    CreateRaider(raider: Raider): Promise<Raider> {
        return this.httpClient.post<Raider>(
            '/raiders',
            raider
        ).then()
    }

    DeleteRaider(id: number): Promise<number> {
        return this.httpClient.delete<number>(
            '/raiders/delete/' + id,
            {}
        ).then();
    }
}