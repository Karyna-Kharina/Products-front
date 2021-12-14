import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../../utils/constants/products";

export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    product
});

export const removeProductFromCart = (product) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    product
});
