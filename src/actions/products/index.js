import { CHANGE_FILTERED_NAME, SET_PRODUCTS } from "../../utils/constants/products";

export const changeFilteredName = (filteredName) => ({
    type: CHANGE_FILTERED_NAME,
    filteredName
});

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    products
});