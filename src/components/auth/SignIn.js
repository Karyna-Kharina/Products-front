import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@material-ui/core";
import { LockOpen } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import AuthStyles from "./AuthStyles";
import TextFieldComponent from "../TextFieldComponent";
import SignHeader from "./SignHeader";
import SignFooter from "./SignFooter";
import SignButton from "./SignButton";
import { SIGN_UP } from "../../utils/links/front";

const useStyles = makeStyles(AuthStyles);

const SignIn = ({ email, isValidEmail, password, isValidPassword, onChangeEmail, onChangePassword, onSignIn }) => {
    const classes = useStyles();
    const isDisabledButton = () => !(isValidEmail && isValidPassword);

    return (
        <Container className={classes.paper} maxWidth={"xs"}>
            <SignHeader
                style={classes.avatar}
                Icon={() => <LockOpen/>}
                name={"Sign In"}
            />

            <Grid className={classes.grid} container spacing={2}>
                <TextFieldComponent
                    label={"Email Address"}
                    value={email}
                    isValidData={isValidEmail}
                    onChangeData={onChangeEmail}
                />

                <TextFieldComponent
                    label={"Password"}
                    type={"password"}
                    value={password}
                    isValidData={isValidPassword}
                    onChangeData={onChangePassword}
                />
            </Grid>

            <SignButton
                style={classes.submit}
                name={"Log In"}
                isDisabledButton={isDisabledButton}
                onClickButton={onSignIn}
            />

            <SignFooter
                linkTo={SIGN_UP}
                name={"Don't you have an account? Sign up"}
            />
        </Container>
    );
};

SignIn.propTypes = {
    email: PropTypes.string.isRequired,
    isValidEmail: PropTypes.bool.isRequired,
    password: PropTypes.string.isRequired,
    isValidPassword: PropTypes.bool.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onSignIn: PropTypes.func.isRequired
};

export default SignIn;