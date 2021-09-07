import React from "react";
import {RaidersService} from "../../services/api/raider-service";
import {HttpClient} from "../../services/api/http-client";

export const CalculatorPage = () => {

    const test = () =>{
        const httpClient = new HttpClient('http://localhost:8081');
        const s = new RaidersService(httpClient);
        s.CreateEventRaider().then()
    }

    return (
        <div><button onClick={()=>test()}>123 123</button>.</div>)}