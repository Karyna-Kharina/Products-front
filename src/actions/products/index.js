import {
    ADD_PRODUCT_TO_CART,
    CHANGE_FILTERED_NAME,
    REMOVE_PRODUCT_FROM_CART,
    SET_PRODUCTS,
    SWAP
} from "../../additionalData/constants/products";

export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    product
});

export const removeProductFromCart = (product) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    product
});
export const changeFilteredName = (filteredName) => ({
    type: CHANGE_FILTERED_NAME,
    filteredName
});

export const setProductList = (products) => ({
    type: SET_PRODUCTS,
    products
});

export const swapProducts = () => ({
    type: SWAP
});