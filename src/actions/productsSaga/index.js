import {
    GET_PRODUCTS_BY_NAME_SAGA,
    GET_PRODUCTS_SAGA,
    REMOVE_PRODUCT_SAGA,
    SAVE_PRODUCT_SAGA
} from "../../utils/constants/productsSaga";

export const saveProductSaga = (product) => ({
    type: SAVE_PRODUCT_SAGA,
    product
});

export const removeProductSaga = (id) => ({
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