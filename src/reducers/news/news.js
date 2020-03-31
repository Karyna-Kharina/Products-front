import newsFixtures from "../../additionalData/fixtures/newsFixtures";
import {CHOOSE_COUNTRY, SEARCH_NEWS_SAGA, SET_NEWS, SET_PAGE_SIZE} from "../../additionalData/constants/news";

const initialState = {newsList: newsFixtures, country: '', pageSize: ''};

export default (state = initialState, action) => {

    switch (action.type) {

        case SET_NEWS: {
            return {
                ...state,
                newsList: action.newsList,
                country: initialState.country,
                pageSize: initialState.country
            }
        }
        case CHOOSE_COUNTRY: {
            return {
                ...state,
                country: action.country
            }
        }
        case SET_PAGE_SIZE: {
            return {
                ...state,
                pageSize: action.pageSize
            }
        }
        case SEARCH_NEWS_SAGA: {
            return {
                ...state
            }
        }
        default:
            return state;
    }
}