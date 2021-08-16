import {HttpClient} from "./http-client";
import {of} from "rxjs";

export interface IHomeApi {
    open(text: string): Promise<string>
}

export class HomeApi implements  IHomeApi{
    constructor(private readonly httpClient: HttpClient){}

    open(text: string): Promise<string> {
        return of('test').toPromise();
        //return this.httpClient.get<Product[]>('/product/GetPage', {pageNumber: pageNumber, pageSize: pageSize}).then()
    }
}