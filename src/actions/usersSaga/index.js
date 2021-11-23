import { DELETE_USER_SAGA, GET_USERS_SAGA, SAVE_USER_SAGA } from "../../additionalData/constants/usersSaga";

export const saveUser = (user) => ({
    type: SAVE_USER_SAGA,
    user
});

export const removeUser = (user) => ({
    type: DELETE_USER_SAGA,
    user
});

export const getUsersSaga = () => ({
    type: GET_USERS_SAGA
});