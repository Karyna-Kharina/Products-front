import { CHANGE_FILTERED_NAME, SET_PRODUCTS } from "../../utils/constants/products";

const initialState = {
    products: [],
    filteredName: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
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