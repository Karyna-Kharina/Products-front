import {
    PUT_PRODUCT_TO_FORM,
    UPDATE_ID,
    UPDATE_IMAGE,
    UPDATE_NAME,
    UPDATE_PRICE
} from "../../additionalData/constants/product";

export const updateId = (id) => ({
    type: UPDATE_ID,
    id
});

export const updateName = (name) => ({
    type: UPDATE_NAME,
    name
});

export const updatePrice = (price) => ({
    type: UPDATE_PRICE,
    price
});

export const updateImage = (image) => ({
    type: UPDATE_IMAGE,
    image
});

export const putProductToForm = (product) => ({
    type: PUT_PRODUCT_TO_FORM,
    product
});