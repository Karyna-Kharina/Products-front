import {
    ADD_PRODUCT_TO_CART,
    CHANGE_FILTERED_NAME,
    DELETE_PRODUCT_SAGA,
    GET_PRODUCTS_SAGA,
    REMOVE_PRODUCT_FROM_CART,
    SAVE_PRODUCT_SAGA,
    SET_PRODUCTS,
    SWAP
} from "../../constants";

export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    product
});

export const removeProductFromCart = (product) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    product
});

export const saveProduct = (product) => ({
    type: SAVE_PRODUCT_SAGA,
    product
});

export const removeProduct = (product) => ({
    type: DELETE_PRODUCT_SAGA,
    product
});

export const swapProducts = () => ({
    type: SWAP
});

export const changeFilteredName = (filteredName) => ({
    type: CHANGE_FILTERED_NAME,
    filteredName
});

export const setProductList = (products) => ({
    type: SET_PRODUCTS,
    products
});

export const getProductsSaga = () => ({
    type: GET_PRODUCTS_SAGA
});