import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Toolbar } from "@material-ui/core";
import TextFieldComponent from "../TextFieldComponent";
import ButtonSaveUpdate from "../ButtonSaveUpdate";
import Birthday from "../auth/Birthday";
import { USERS } from "../../additionalData/links/front";

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
    const isDisabledButtonSave = () => !(
        isValidFirstName &&
        isValidLastName &&
        isValidEmail &&
        isValidPhoneNumber &&
        isValidPhoto &&
        isValidPassword
    );

    return (
        <Container>
            <Toolbar/>

            <Grid item container justifyContent={"center"} alignItems={"center"} spacing={4} xs={10}>
                <TextFieldComponent
                    label={"ID"}
                    value={id}
                    disabled={true}
                    isValidData={true}
                    onChangeData={onChangeId}
                />

                <TextFieldComponent
                    label={"First Name"}
                    value={firstName}
                    isValidData={isValidFirstName}
                    onChangeData={onChangeFirstName}
                />

                <TextFieldComponent
                    label={"Last Name"}
                    value={lastName}
                    isValidData={isValidLastName}
                    onChangeData={onChangeLastName}
                />

                <Grid item xs={12}>
                    <Birthday
                        birthday={birthday}
                        isValidBirthday={isValidBirthday}
                        onChangeBirthday={onChangeBirthday}
                    />
                </Grid>

                <TextFieldComponent
                    label={"Phone Number"}
                    value={phoneNumber}
                    isValidData={isValidPhoneNumber}
                    onChangeData={onChangePhoneNumber}
                />

                <TextFieldComponent
                    label={"Email"}
                    value={email}
                    isValidData={isValidEmail}
                    onChangeData={onChangeEmail}
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

                <ButtonSaveUpdate
                    id={id}
                    linkTo={USERS}
                    isDisabledButtonSave={isDisabledButtonSave}
                    onSave={() => onSave({ id, firstName, lastName, phoneNumber, email, photo, password })}
                />
            </Grid>
        </Container>
    );
};

UserForm.propTypes = {
    id: PropTypes.string.isRequired,
    onChangeId: PropTypes.func.isRequired,
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
    onChangePhoneNumber: PropTypes.func.isRequired,
    photo: PropTypes.string.isRequired,
    isValidPhoto: PropTypes.bool.isRequired,
    onChangePhoto: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    isValidPassword: PropTypes.bool.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default UserForm;