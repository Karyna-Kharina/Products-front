import { isValidImageUrl, isValidName, isValidPrice } from "../../additionalData/validation";
import {
    CLEAR_PRODUCT_FORM,
    PUT_PRODUCT_TO_FORM,
    UPDATE_ID,
    UPDATE_IMAGE,
    UPDATE_NAME,
    UPDATE_PRICE
} from "../../additionalData/constants/products";

const initialState = {
    product: {
        id: "",
        name: "",
        isValidName: false,
        price: "",
        isValidPrice: false,
        image: "",
        isValidImage: false
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ID: {
            return {
                ...state,
                product: {
                    ...state.product,
                    id: action.id
                }
            };
        }
        case UPDATE_NAME: {
            return {
                ...state,
                product: {
                    ...state.product,
                    name: action.name,
                    isValidName: isValidName(action.name)
                }
            };
        }
        case UPDATE_PRICE: {
            return {
                ...state,
                product: {
                    ...state.product,
                    price: action.price,
                    isValidPrice: isValidPrice(action.price)
                }
            };
        }
        case UPDATE_IMAGE: {
            return {
                ...state,
                product: {
                    ...state.product,
                    image: action.image,
                    isValidImage: isValidImageUrl(action.image)
                }
            };
        }
        case PUT_PRODUCT_TO_FORM: {
            return {
                ...state,
                product: {
                    ...action.product,
                    isValidName: isValidName(action.product.name),
                    isValidPrice: isValidPrice(action.product.price),
                    isValidImage: isValidImageUrl(action.product.image)
                }
            };
        }
        case CLEAR_PRODUCT_FORM: {
            return {
                ...state,
                product: { ...initialState.product }
            };
        }
        default:
            return state;
    }
}