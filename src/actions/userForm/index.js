import {
    CHANGE_USER_BIRTHDAY,
    CHANGE_USER_EMAIL,
    CHANGE_USER_FIRST_NAME,
    CHANGE_USER_ID,
    CHANGE_USER_LAST_NAME,
    CHANGE_USER_PASSWORD,
    CHANGE_USER_PHONE_NUMBER,
    CHANGE_USER_PHOTO,
    PUT_USER_TO_FORM
} from "../../additionalData/constants/users";

export const changeId = (id) => ({
    type: CHANGE_USER_ID,
    id
});

export const changeFirstName = (firstName) => ({
    type: CHANGE_USER_FIRST_NAME,
    firstName
});

export const changeLastName = (lastName) => ({
    type: CHANGE_USER_LAST_NAME,
    lastName
});

export const changeBirthday = (birthday) => ({
    type: CHANGE_USER_BIRTHDAY,
    birthday
});

export const changePhoneNumber = (phoneNumber) => ({
    type: CHANGE_USER_PHONE_NUMBER,
    phoneNumber
});

export const changeEmail = (email) => ({
    type: CHANGE_USER_EMAIL,
    email
});

export const changePhoto = (photo) => ({
    type: CHANGE_USER_PHOTO,
    photo
});

export const changePassword = (password) => ({
    type: CHANGE_USER_PASSWORD,
    password
});

export const putUserToForm = (user) => ({
    type: PUT_USER_TO_FORM,
    user
});