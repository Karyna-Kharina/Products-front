import { CHOOSE_CATEGORY, CHOOSE_COUNTRY, SET_NEWS, SET_PAGE_SIZE } from "../../additionalData/constants/news";

const initialState = {
    newsList: [],
    country: {
        code: "UA",
        label: "Ukraine",
        phone: "380"
    },
    category: {},
    pageSize: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return {
                ...state,
                newsList: action.newsList
            };
        }
        case CHOOSE_COUNTRY: {
            return {
                ...state,
                country: action.country
            };
        }
        case CHOOSE_CATEGORY: {
            return {
                ...state,
                category: action.category
            };
        }
        case SET_PAGE_SIZE: {
            return {
                ...state,
                pageSize: action.pageSize
            };
        }
        default:
            return state;
    }
}