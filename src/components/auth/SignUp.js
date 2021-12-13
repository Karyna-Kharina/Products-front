import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import AuthStyles from "./AuthStyles";
import Birthday from "./Birthday";
import TextFieldComponent from "../TextFieldComponent";
import SignHeader from "./SignHeader";
import SignButton from "./SignButton";
import SignFooter from "./SignFooter";
import { SIGN_IN } from "../../utils/links/front";

const useStyles = makeStyles(AuthStyles);

const SignUp = ({
                    firstName, isValidFirstName, onChangeFirstName,
                    lastName, isValidLastName, onChangeLastName,
                    birthday, isValidBirthday, onChangeBirthday,
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
            isValidBirthday &&
            isValidEmail &&
            isValidPhoneNumber &&
            isValidPassword
        );
    };

    return (
        <Container maxWidth={"xs"}>
            <div className={classes.paper}>
                <SignHeader
                    style={classes.avatar}
                    Icon={() => <LockOutlined/>}
                    name={"Sign Up"}
                />

                <Grid className={classes.grid} container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextFieldComponent
                            label={"First Name"}
                            value={firstName}
                            isValidData={isValidFirstName}
                            onChangeData={onChangeFirstName}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextFieldComponent
                            label={"Last Name"}
                            value={lastName}
                            isValidData={isValidLastName}
                            onChangeData={onChangeLastName}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Birthday
                            birthday={birthday}
                            isValidBirthday={isValidBirthday}
                            onChangeBirthday={onChangeBirthday}
                        />
                    </Grid>

                    <TextFieldComponent
                        label={"Email Address"}
                        value={email}
                        isValidData={isValidEmail}
                        onChangeData={onChangeEmail}
                    />

                    <TextFieldComponent
                        label={"Phone Number"}
                        value={phoneNumber}
                        isValidData={isValidPhoneNumber}
                        onChangeData={onChangePhone}
                    />

                    <TextFieldComponent
                        label={"Photo URL"}
                        value={photo}
                        isValidData={isValidPhoto}
                        onChangeData={onChangePhoto}
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
                    name={"Sign Up"}
                    isDisabledButton={isDisabledButton}
                    onClickButton={onSignUp}
                />

                <SignFooter
                    linkTo={SIGN_IN}
                    name={"Do you have an account? Sign in"}
                />
            </div>
        </Container>
    );
};

SignUp.propTypes = {
    firstName: PropTypes.string.isRequired,
    isValidFirstName: PropTypes.bool.isRequired,
    onChangeFirstName: PropTypes.func.isRequired,
    lastName: PropTypes.string.isRequired,
    isValidLastName: PropTypes.bool.isRequired,
    onChangeLastName: PropTypes.func.isRequired,
    birthday: PropTypes.string.isRequired,
    isValidBirthday: PropTypes.bool.isRequired,
    onChangeBirthday: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    isValidEmail: PropTypes.bool.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    isValidPhoneNumber: PropTypes.bool.isRequired,
    onChangePhone: PropTypes.func.isRequired,
    photo: PropTypes.string.isRequired,
    isValidPhoto: PropTypes.bool.isRequired,
    onChangePhoto: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    isValidPassword: PropTypes.bool.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired
};

export default SignUp;