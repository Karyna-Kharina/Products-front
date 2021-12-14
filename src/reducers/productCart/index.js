import { removeItemFrom } from "../../utils/methods";
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../../utils/constants/products";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            return [
                ...state,
                action.product
            ];
        }
        case REMOVE_PRODUCT_FROM_CART: {
            return [...removeItemFrom(state, action.product)];
        }
        default:
            return state;
    }
}