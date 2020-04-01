import {
    CHOOSE_CATEGORY,
    CHOOSE_COUNTRY,
    GET_NEWS_SAGA,
    SET_NEWS,
    SET_PAGE_SIZE
} from "../../additionalData/constants/news";

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

export const chooseCategory = (category) => ({
    type: CHOOSE_CATEGORY,
    category
});

export const getNews = () => ({
    type: GET_NEWS_SAGA
});
