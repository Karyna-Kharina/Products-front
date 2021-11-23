import { SWAP } from "../../additionalData/constants/products";
import {
    CHANGE_FILTERED_USERNAME,
    CLICK_ON_PAGE,
    SET_TOTAL_PAGES,
    SET_USERS
} from "../../additionalData/constants/users";

const initialState = {
    users: [],
    filteredName: "",
    page: 0,
    size: 10,
    totalPages: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SWAP: {
            return {
                ...state,
                users: [...state.users].reverse()
            };
        }
        case CHANGE_FILTERED_USERNAME: {
            return {
                ...state,
                filteredName: action.filteredName
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            };
        }
        case CLICK_ON_PAGE: {
            return {
                ...state,
                page: action.page
            };
        }
        case SET_TOTAL_PAGES: {
            return {
                ...state,
                totalPages: action.totalPages
            };
        }
        default:
            return state;
    }
}