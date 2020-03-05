import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import App from "./containers/App";
import {Route} from "react-router";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/sign-up">
                    <SignUp/>
                </Route>

                <Route path="/sign-in">
                    <SignIn/>
                </Route>

                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);