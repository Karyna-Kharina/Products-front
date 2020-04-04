import {
    CHANGE_CHECKBOX,
    CHANGE_DATE,
    CHANGE_EMAIL,
    CHANGE_FIRST_NAME,
    CHANGE_LAST_NAME,
    CHANGE_PASSWORD,
    CHANGE_PHONE,
    SIGN_UP_SAGA
} from "../../additionalData/constants/auth";

export const changeFirstName = (firstName) => ({
    type: CHANGE_FIRST_NAME,
    firstName
});

export const changeLastName = (lastName) => ({
    type: CHANGE_LAST_NAME,
    lastName
});

export const changeEmail = (email) => ({
    type: CHANGE_EMAIL,
    email
});

export const changePassword = (password) => ({
    type: CHANGE_PASSWORD,
    password
});

export const changeDate = (date) => ({
    type: CHANGE_DATE,
    date
});

export const changePhone = (phone) => ({
    type: CHANGE_PHONE,
    phone
});

export const changeCheckbox = (checkbox) => ({
    type: CHANGE_CHECKBOX,
    checkbox
});

export const signUp = () => ({
    type: SIGN_UP_SAGA
});

