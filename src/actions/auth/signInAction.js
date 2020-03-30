import {CHANGE_EMAIL_IN, CHANGE_PASSWORD_IN, LOG_IN_SAGA} from "../../constants";

export const changeEmail = (email) => ({
    type: CHANGE_EMAIL_IN,
    email
});

export const changePassword = (password) => ({
    type: CHANGE_PASSWORD_IN,
    password
});

export const logIn = () => ({
    type: LOG_IN_SAGA
});