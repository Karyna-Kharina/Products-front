import React from "react";
import { Redirect, Route, Switch } from "react-router";
import App from "../../containers/app";
import SignUp from "../../containers/auth/SignUp";
import SignIn from "../../containers/auth/SignIn";
import { APP, SIGN_IN, SIGN_UP } from "../../additionalData/links/front";

const Body = ({ currentUser }) => (
    <Switch>
        <Route path={SIGN_UP}>
            {currentUser ? <Redirect to={APP}/> : <SignUp/>}
        </Route>

        <Route path={SIGN_IN}>
            {currentUser ? <Redirect to={APP}/> : <SignIn/>}
        </Route>

        <Route path={APP}>
            {currentUser ? <App/> : <Redirect to={SIGN_IN}/>}
        </Route>
    </Switch>
);

export default Body;