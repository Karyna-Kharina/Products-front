import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Birthday } from "../auth/constituents";
import UserFormRow from "./UserFormRow";
import FullWidthButtonSave from "../productForm/FullWidthButtonSave";
import { USERS } from "../../additionalData/links/front";

const useStyles = makeStyles({
    root: {
        marginTop: 15
    },
    date: {
        padding: "0 24px 0 6px"
    }
});

const UserForm = ({
                      id, onChangeId,
                      firstName, isValidFirstName, onChangeFirstName,
                      lastName, isValidLastName, onChangeLastName,
                      birthday, isValidBirthday, onChangeBirthday,
                      email, isValidEmail, onChangeEmail,
                      phoneNumber, isValidPhoneNumber, onChangePhoneNumber,
                      photo, isValidPhoto, onChangePhoto,
                      password, isValidPassword, onChangePassword,
                      onSave
                  }) => {
    const classes = useStyles();

    const isDisabledButtonSave = () => !(
        isValidFirstName &&
        isValidLastName &&
        isValidEmail &&
        isValidPhoneNumber &&
        isValidPhoto &&
        isValidPassword
    );

    return (
        <form noValidate>
            <Container className={classes.root} component={"main"}>
                <Grid item container justifyContent={"center"} alignItems={"center"} spacing={4} xs={10}>
                    <UserFormRow
                        label={"ID"}
                        value={id}
                        disabled={true}
                        isValidData={true}
                        onChangeData={onChangeId}
                    />

                    <UserFormRow
                        label={"First Name"}
                        value={firstName}
                        isValidData={isValidFirstName}
                        onChangeData={onChangeFirstName}
                    />

                    <UserFormRow
                        label={"Last Name"}
                        value={lastName}
                        isValidData={isValidLastName}
                        onChangeData={onChangeLastName}
                    />

                    <Grid item xs={12} className={classes.date}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Birthday
                                birthday={birthday}
                                isValidBirthday={isValidBirthday}
                                onChangeBirthday={onChangeBirthday}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>

                    <UserFormRow
                        label={"Phone Number"}
                        value={phoneNumber}
                        isValidData={isValidPhoneNumber}
                        onChangeData={onChangePhoneNumber}
                    />

                    <UserFormRow
                        label={"Email"}
                        value={email}
                        isValidData={isValidEmail}
                        onChangeData={onChangeEmail}
                    />

                    <UserFormRow
                        label={"Photo"}
                        value={photo}
                        isValidData={isValidPhoto}
                        onChangeData={onChangePhoto}
                    />

                    <UserFormRow
                        label={"Password"}
                        type={id ? "any" : "password"}
                        value={password}
                        isValidData={isValidPassword}
                        onChangeData={onChangePassword}
                    />

                    <FullWidthButtonSave
                        id={id}
                        data={{ id, firstName, lastName, phoneNumber, email, photo, password }}
                        linkTo={USERS}
                        isDisabledButtonSave={isDisabledButtonSave}
                        onSave={onSave}
                    />
                </Grid>
            </Container>
        </form>
    );
};

export default UserForm;