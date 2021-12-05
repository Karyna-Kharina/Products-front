import {
    REMOVE_PRODUCT_SAGA,
    GET_PRODUCTS_BY_NAME_SAGA,
    GET_PRODUCTS_SAGA,
    SAVE_PRODUCT_SAGA
} from "../../additionalData/constants/productsSaga";

export const saveProduct = (product) => ({
    type: SAVE_PRODUCT_SAGA,
    product
});

export const removeProduct = (id) => ({
    type: REMOVE_PRODUCT_SAGA,
    id
});

export const getProductsSaga = () => ({
    type: GET_PRODUCTS_SAGA
});

export const getProductsByFilteredNameSaga = (filteredName) => ({
    type: GET_PRODUCTS_BY_NAME_SAGA,
    filteredName
});