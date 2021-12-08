import {
    CHANGE_BIRTHDAY,
    CHANGE_EMAIL,
    CHANGE_FIRST_NAME,
    CHANGE_LAST_NAME,
    CHANGE_PASSWORD,
    CHANGE_PHONE,
    CHANGE_PHOTO
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

export const changeBirthday = (birthday) => ({
    type: CHANGE_BIRTHDAY,
    birthday
});

export const changePhone = (phone) => ({
    type: CHANGE_PHONE,
    phone
});

export const changePhoto = (photo) => ({
    type: CHANGE_PHOTO,
    photo
});
