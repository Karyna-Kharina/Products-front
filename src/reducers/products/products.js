import { removeItemFrom } from "../../additionalData/methods";
import {
    ADD_PRODUCT_TO_CART,
    CHANGE_FILTERED_NAME,
    REMOVE_PRODUCT_FROM_CART,
    SET_PRODUCTS
} from "../../additionalData/constants/products";

const initialState = {
    products: [],
    productsInCart: [],
    filteredName: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.product]
            };
        }
        case REMOVE_PRODUCT_FROM_CART: {
            return {
                ...state,
                productsInCart: removeItemFrom(state.productsInCart, action.product)
            };
        }
        case CHANGE_FILTERED_NAME: {
            return {
                ...state,
                filteredName: action.filteredName
            };
        }
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.products
            };
        }
        default:
            return state;
    }
}