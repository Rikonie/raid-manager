import React from 'react';
import './App.css';
import {RootConfig} from "./root/configure-root";
import { BrowserRouter} from 'react-router-dom';
import {MainRouter} from "./routers/main-router";
import {Provider} from "react-redux";

const App: React.FC<RootConfig> = ({store}) => {

    return (
        <Provider store={store}>
            <BrowserRouter basename={'/'}>
                        <MainRouter/>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
