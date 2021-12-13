import { CHANGE_FILTERED_USERNAME, SET_USERS } from "../../utils/constants/users";

export const changeFilteredUsername = (filteredName) => ({
    type: CHANGE_FILTERED_USERNAME,
    filteredName
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users
});