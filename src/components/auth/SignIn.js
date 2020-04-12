import React from "react";
import {Avatar, Button, Container, Grid, Typography} from "@material-ui/core";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {makeStyles} from '@material-ui/core/styles';
import {styles} from "./components/AuthStyle";
import {Link} from "react-router-dom";
import {SIGN_UP} from "../../additionalData/links/front";
import Email from "./components/Email";
import Password from "./components/Password";

const useStyles = makeStyles(styles);

export default ({email, isValidEmail, password, isValidPassword, onChangeEmail, onChangePassword, onLogIn}) => {

    const classes = useStyles();

    const isDisabledButton = () => {
        return !(isValidEmail && isValidPassword);
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>

                <Avatar className={classes.avatar}>
                    <LockOpenIcon/>
                </Avatar>

                <Typography component="h1" variant="h5">
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
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={onLogIn}
                >
                    LogIn
                </Button>

                <Grid container justify="flex-end">
                    <Grid item>
                        <Button color='secondary' to={SIGN_UP} component={Link}>
                            Do you haven't an account? Sign up
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}