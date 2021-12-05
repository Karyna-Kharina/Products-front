import { CHANGE_EMAIL_AT_LOGIN, CHANGE_PASSWORD_AT_LOGIN } from "../../additionalData/constants/auth";

export const changeEmailAtLogin = (email) => ({
    type: CHANGE_EMAIL_AT_LOGIN,
    email
});

export const changePasswordAtLogin = (password) => ({
    type: CHANGE_PASSWORD_AT_LOGIN,
    password
});