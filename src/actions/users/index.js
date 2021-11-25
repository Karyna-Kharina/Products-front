import { CHANGE_FILTERED_USERNAME, SET_USERS } from "../../additionalData/constants/users";

export const changeFilteredUsername = (filteredName) => ({
    type: CHANGE_FILTERED_USERNAME,
    filteredName
});

export const setUserList = (users) => ({
    type: SET_USERS,
    users
});