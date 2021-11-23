import { CHANGE_EMAIL_IN, CHANGE_PASSWORD_IN } from "../../additionalData/constants/auth";

export const changeEmail = (email) => ({
    type: CHANGE_EMAIL_IN,
    email
});

export const changePassword = (password) => ({
    type: CHANGE_PASSWORD_IN,
    password
});