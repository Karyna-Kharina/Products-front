import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT, REMOVE_PRODUCT_FROM_CART, SAVE_PRODUCT, SWAP} from "../constants";

export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    product
});

export const removeProductFromCart = (product) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    product
});

export const saveProduct = (product) => ({
    type: SAVE_PRODUCT,
    product
});

export const removeProduct = (product) => ({
    type: REMOVE_PRODUCT,
    product
});

export const swapProducts = () => ({
    type: SWAP
});
