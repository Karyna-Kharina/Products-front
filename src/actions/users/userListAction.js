import {
    CHANGE_FILTERED_USERNAME,
    DELETE_USER_SAGA,
    GET_USERS_BY_NAME_SAGA,
    GET_USERS_SAGA,
    SAVE_USER,
    SET_USERS
} from "../../additionalData/constants/user";

export const saveUser = (user) => ({
    type: SAVE_USER,
    user
});

export const removeUser = (user) => ({
    type: DELETE_USER_SAGA,
    user
});

export const changeFilteredUsername = (filteredName) => ({
    type: CHANGE_FILTERED_USERNAME,
    filteredName
});

export const setUserList = (users) => ({
    type: SET_USERS,
    users
});

export const getUsersSaga = () => ({
    type: GET_USERS_SAGA
});

export const getUsersByFilteredNameSaga = (filteredName) => ({
    type: GET_USERS_BY_NAME_SAGA,
    filteredName
});
