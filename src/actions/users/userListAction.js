import {CHANGE_FILTERED_USERNAME, REMOVE_USER, SAVE_USER} from "../../constants";

export const saveUser = (user) => ({
    type: SAVE_USER,
    user
});

export const removeUser = (user) => ({
    type: REMOVE_USER,
    user
});

export const changeFilteredUsername = (filteredName) => ({
    type: CHANGE_FILTERED_USERNAME,
    filteredName
});