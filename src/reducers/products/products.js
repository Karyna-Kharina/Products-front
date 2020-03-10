import productFixtures from "../../productFixtures";
import {removeItemFrom, saveItemTo} from "../../methods";
import {
    ADD_PRODUCT_TO_CART,
    CHANGE_FILTERED_NAME,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_FROM_CART,
    SAVE_PRODUCT,
    SWAP
} from "../../constants";

const initialState = {products: productFixtures, productsInCart: [], filteredName: ''};

export default (state = initialState, action) => {

    switch (action.type) {

        case ADD_PRODUCT_TO_CART: {
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.product]
            }
        }
        case REMOVE_PRODUCT_FROM_CART: {
            return {
                ...state,
                productsInCart: removeItemFrom(state.productsInCart, action.product)
            }
        }
        case SAVE_PRODUCT: {
            return {
                ...state,
                products: saveItemTo(state.products, action.product)
            }
        }
        case REMOVE_PRODUCT: {
            return {
                ...state,
                products: removeItemFrom(state.products, action.product)
            }
        }
        case SWAP: {
            return {
                ...state,
                products: [...state.products].reverse()
            }
        }
        case CHANGE_FILTERED_NAME: {
            return {
                ...state,
                filteredName: action.filteredName
            }
        }
        default:
            return state;
    }
}