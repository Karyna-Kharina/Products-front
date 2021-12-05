import React from "react";
import { Link } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Avatar, Button, Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AuthStyles, Birthday, Email, FirstName, LastName, Password, PhoneNumber, PhotoUrl } from "./constituents";
import { SIGN_IN } from "../../additionalData/links/front";

const useStyles = makeStyles(AuthStyles);

const SignUp = ({
                    firstName, isValidFirstName, onChangeFirstName,
                    lastName, isValidLastName, onChangeLastName,
                    date, isValidDate, onChangeDate,
                    email, isValidEmail, onChangeEmail,
                    phoneNumber, isValidPhoneNumber, onChangePhone,
                    photo, isValidPhoto, onChangePhoto,
                    password, isValidPassword, onChangePassword,
                    onSignUp
                }) => {
    const classes = useStyles();

    const isDisabledButton = () => {
        return !(
            isValidFirstName &&
            isValidLastName &&
            isValidDate &&
            isValidEmail &&
            isValidPhoneNumber &&
            isValidPassword
        );
    };

    return (
        <Container component={"main"} maxWidth={"xs"}>
            <CssBaseline/>

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>

                <Typography component={"h1"} variant={"h5"}>
                    Sign Up
                </Typography>

                <Grid className={classes.grid} container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FirstName
                            firstName={firstName}
                            isValidFirstName={isValidFirstName}
                            onChangeFirstName={onChangeFirstName}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <LastName
                            lastName={lastName}
                            isValidLastName={isValidLastName}
                            onChangeLastName={onChangeLastName}
                        />
                    </Grid>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justifyContent={"space-around"}>
                            <Birthday
                                date={date}
                                isValidDate={isValidDate}
                                onChangeDate={onChangeDate}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>

                    <Grid item xs={12}>
                        <Email
                            email={email}
                            isValidEmail={isValidEmail}
                            onChangeEmail={onChangeEmail}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <PhoneNumber
                            phoneNumber={phoneNumber}
                            isValidPhoneNumber={isValidPhoneNumber}
                            onChangePhone={onChangePhone}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <PhotoUrl
                            photo={photo}
                            isValidPhoto={isValidPhoto}
                            onChangePhoto={onChangePhoto}
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
                    onClick={onSignUp}
                >
                    Sign Up
                </Button>

                <Grid container justifyContent={"flex-end"}>
                    <Grid item>
                        <Button color={"secondary"} to={SIGN_IN} component={Link}>
                            Already have an account? Sign in
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default SignUp;