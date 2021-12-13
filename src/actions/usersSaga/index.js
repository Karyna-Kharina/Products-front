import {
    REMOVE_USER_SAGA,
    GET_USERS_BY_NAME_SAGA,
    GET_USERS_SAGA,
    SAVE_USER_SAGA
} from "../../utils/constants/usersSaga";

export const saveUser = (user) => ({
    type: SAVE_USER_SAGA,
    user
});

export const removeUser = (id) => ({
    type: REMOVE_USER_SAGA,
    id
});

export const getUsersSaga = () => ({
    type: GET_USERS_SAGA
});

export const getUsersByFilteredNameSaga = (filteredName) => ({
    type: GET_USERS_BY_NAME_SAGA,
    filteredName
});