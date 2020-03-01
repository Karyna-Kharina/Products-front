import productFixtures from "../../productFixtures";

const initialState = {products: productFixtures, productsInCart: []};

export default (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_PRODUCT_TO_CART': {
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.product]
            }
        }
        case 'REMOVE_PRODUCT_FROM_CART': {

            const index = state.productsInCart.findIndex((el) => el.id === action.product.id);

            const newList = [
                ...state.productsInCart.slice(0, index),
                ...state.productsInCart.slice(index + 1)
            ];

            return {
                ...state,
                productsInCart: newList
            }
        }
        default: return state;
    }
}