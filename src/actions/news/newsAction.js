import {CHOOSE_COUNTRY, SEARCH_NEWS_SAGA, SET_NEWS, SET_PAGE_SIZE} from "../../additionalData/constants/news";

export const setNews = (newsList) => ({
    type: SET_NEWS,
    newsList
});

export const chooseCountry = (country) => ({
    type: CHOOSE_COUNTRY,
    country
});

export const setPageSize = (pageSize) => ({
    type: SET_PAGE_SIZE,
    pageSize
});

export const searchNews = () => ({
    type: SEARCH_NEWS_SAGA
});
