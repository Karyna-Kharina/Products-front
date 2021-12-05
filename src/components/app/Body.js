import React from "react";
import { Route, Switch } from "react-router";
import App from "../../containers/app";
import SignUp from "../../containers/auth/SignUp";
import SignIn from "../../containers/auth/SignIn";
import { APP, SIGN_IN, SIGN_UP } from "../../additionalData/links/front";

const Body = ({ currentUser }) => (
    <Switch>
        <Route path={SIGN_UP}>
            {currentUser ? <App/> : <SignUp/>}
        </Route>

        <Route path={SIGN_IN}>
            {currentUser ? <App/> : <SignIn/>}
        </Route>

        <Route path={APP}>
            {currentUser ? <App/> : <SignIn/>}
        </Route>
    </Switch>
);

export default Body;