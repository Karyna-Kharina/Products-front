import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import App from "./containers/App";
import {Route} from "react-router";
import SignUp from "./containers/auth/SignUp";
import SignIn from "./containers/auth/SignIn";
import {APP, SIGN_IN, SIGN_UP} from "./links";

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>

                <Route path={SIGN_UP}>
                    <SignUp/>
                </Route>

                <Route path={SIGN_IN}>
                    <SignIn/>
                </Route>

                <Route path={APP}>
                    <App/>
                </Route>

            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);