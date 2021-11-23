import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, Container, Grid, Typography } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { makeStyles } from "@material-ui/core/styles";
import Email from "./constituents/Email";
import Password from "./constituents/Password";
import AuthStyles from "./constituents/AuthStyles";
import { SIGN_UP } from "../../additionalData/links/front";

const useStyles = makeStyles(AuthStyles);

const SignIn = ({ email, isValidEmail, password, isValidPassword, onChangeEmail, onChangePassword, onLogIn }) => {
    const classes = useStyles();
    const isDisabledButton = () => !(isValidEmail && isValidPassword);

    return (
        <Container component={"main"} maxWidth={"xs"}>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOpenIcon/>
                </Avatar>

                <Typography component={"h1"} variant={"h5"}>
                    Sign In
                </Typography>

                <Grid className={classes.grid} container spacing={2}>
                    <Grid item xs={12}>
                        <Email
                            email={email}
                            isValidEmail={isValidEmail}
                            onChangeEmail={onChangeEmail}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Password
                            password={password}
                            isValidPassword={isValidPassword}
                            onChangePassword={onChangePassword}
                        />
                    </Grid>
                </Grid>

                <Button
                    fullWidth
                    disabled={isDisabledButton()}
                    variant={"contained"}
                    color={"primary"}
                    className={classes.submit}
                    onClick={onLogIn}
                >
                    LogIn
                </Button>

                <Grid container justifyContent={"flex-end"}>
                    <Grid item>
                        <Button color={"secondary"} to={SIGN_UP} component={Link}>
                            Do you haven't an account? Sign up
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default SignIn;