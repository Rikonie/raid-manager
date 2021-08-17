import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {LayoutComponent} from "../components/layout/layout";
import {NotFoundPage} from "../pages/not-found/not-found-page";
import {HomePage} from "../pages/home/home-page";
import { GuildPage } from "../pages/guild/guild-page";

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

                <Route component={NotFoundPage}>
                    <NotFoundPage/>
                </Route>
            </Switch>
        </>
    );
};
