import { isValidImageUrl, isValidName, isValidPrice } from "../../utils/validation";
import {
    CLEAR_PRODUCT_FORM,
    PUT_PRODUCT_TO_FORM,
    UPDATE_ID,
    UPDATE_IMAGE,
    UPDATE_NAME,
    UPDATE_PRICE
} from "../../utils/constants/products";

const initialState = {
    id: "",
    name: "",
    isValidName: false,
    price: "",
    isValidPrice: false,
    image: "",
    isValidImage: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ID: {
            return {
                ...state,
                id: action.id
            };
        }
        case UPDATE_NAME: {
            return {
                ...state,
                name: action.name,
                isValidName: isValidName(action.name)
            };
        }
        case UPDATE_PRICE: {
            return {
                ...state,
                price: action.price,
                isValidPrice: isValidPrice(action.price)
            };
        }
        case UPDATE_IMAGE: {
            return {
                ...state,
                image: action.image,
                isValidImage: isValidImageUrl(action.image)
            };
        }
        case PUT_PRODUCT_TO_FORM: {
            const { name, price, image } = action;

            return {
                ...action.product,
                isValidName: isValidName(name),
                isValidPrice: isValidPrice(price),
                isValidImage: isValidImageUrl(image)
            };
        }
        case CLEAR_PRODUCT_FORM: {
            return {
                ...initialState
            };
        }
        default:
            return state;
    }
}