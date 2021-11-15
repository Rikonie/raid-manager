import React, {useState} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {LayoutComponent} from "../components/layout/layout";
import {NotFoundPage} from "../pages/not-found/not-found-page";
import {HomePage} from "../pages/home/home-page";
import { GuildPage } from "../pages/guild/guild-page";
import { StatisticsPage } from "../pages/statistics/statistics-page";
import { CalculatorPage } from "../pages/calculator/calculator-page";
import { TimetablePage } from "../pages/timetable/timetable-page";
import {AuthorizationPage} from "../pages/authorization/authorization-page"
import {RaidersPage} from "../pages/raiders/raiders-page";
import {CreateRaiderPage} from "../pages/create-raider/create-raider-page";
import {CreateRaidPage} from "../pages/create-raid/create-raid-page";

export const MainRouter: React.FC = () => {
    return (
        <>
            <Switch>
                <Route path="/home">
                    <LayoutComponent>
                        <HomePage/>
                    </LayoutComponent>
                </Route>

                <Route path="/guild">
                    <LayoutComponent>
                        <GuildPage/>
                    </LayoutComponent>
                </Route>

                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>

                <Route path="/statistics">
                    <LayoutComponent>
                        <StatisticsPage/>
                    </LayoutComponent>
                </Route>

                <Route path="/calculator">
                    <LayoutComponent>
                        <CalculatorPage/>
                    </LayoutComponent>
                </Route>

                <Route path="/timetable">
                    <LayoutComponent>
                        <TimetablePage/>
                    </LayoutComponent>
                </Route>

                <Route path="/authorization">
                    <LayoutComponent>
                        <AuthorizationPage/>
                    </LayoutComponent>
                </Route>

                <Route path="/raiders">
                    <LayoutComponent>
                        <RaidersPage/>
                    </LayoutComponent>
                </Route>

                <Route component={NotFoundPage}>
                    <NotFoundPage/>
                </Route>

            </Switch>
        </>
    );
};
