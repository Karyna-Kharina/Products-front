import productFixtures from "../productFixtures";
import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT, REMOVE_PRODUCT_FROM_CART, SAVE_PRODUCT, SWAP} from "../constants";

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
                productsInCart: removeProductFrom(state.productsInCart, action.product)
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
                products: removeProductFrom(state.products, action.product)
            }
        }
        case SWAP: {
            return {
                ...state,
                products: [...state.products].reverse()
            }
        }
        default:
            return state;
    }
}

function removeProductFrom(list, item) {

    const index = list.findIndex((el) => el.id === item.id);

    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
}

function saveItemTo(list, item) {

    const index = list.findIndex((el) => el.id === item.id);

    let newList = [];

    if (index === -1) {
        newList = [...list, item];
    } else {
        newList = [
            ...list.slice(0, index),
            item,
            ...list.slice(index + 1)
        ];
    }

    return newList;
}