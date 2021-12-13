import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router";
import App from "../../containers/app";
import SignUp from "../../containers/auth/SignUp";
import SignIn from "../../containers/auth/SignIn";
import { APP, SIGN_IN, SIGN_UP } from "../../utils/links/front";

const AppBody = ({ currentUser }) => (
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

AppBody.propTypes = {
    currentUser: PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    })
};
export default AppBody;