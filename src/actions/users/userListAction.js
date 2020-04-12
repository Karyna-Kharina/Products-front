import {
    CHANGE_FILTERED_USERNAME,
    CLICK_ON_PAGE,
    DELETE_USER_SAGA,
    GET_USERS_SAGA,
    SET_TOTAL_PAGES,
    SET_USERS
} from "../../additionalData/constants/user";

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

export const clickOnPage = (page) => ({
    type: CLICK_ON_PAGE,
    page
});

export const setTotalPages = (totalPages) => ({
    type: SET_TOTAL_PAGES,
    totalPages
});
