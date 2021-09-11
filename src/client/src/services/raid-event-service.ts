import {HttpClient} from "./api/http-client";
import {Raid} from "../models/raidEvent";

export interface IRaidEventService {
    CreateRaid(raid:Raid): Promise<Raid>
}

export class RaidEventService implements IRaidEventService{
    constructor (private readonly httpClient: HttpClient) {
    }
       CreateRaid(raid: Raid) : Promise<Raid> {
            return this.httpClient.post<any>(
                '/events',
                {
                    dateTimeStart: raid.raidDate.getTime(),
                    description: (raid.description),
                    id: (raid.id),
                }
            ).then()
        }
    }
