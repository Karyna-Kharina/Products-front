import {
    CHANGE_FILTERED_USERNAME,
    CLICK_ON_PAGE,
    SET_TOTAL_PAGES,
    SET_USERS
} from "../../additionalData/constants/users";

export const changeFilteredUsername = (filteredName) => ({
    type: CHANGE_FILTERED_USERNAME,
    filteredName
});

export const setUserList = (users) => ({
    type: SET_USERS,
    users
});

export const clickOnPage = (page) => ({
    type: CLICK_ON_PAGE,
    page
});

export const setTotalPages = (totalPages) => ({
    type: SET_TOTAL_PAGES,
    totalPages
});
