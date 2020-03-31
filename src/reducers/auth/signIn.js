import {CHANGE_EMAIL_IN, CHANGE_PASSWORD_IN, CLEAR_SIGN_IN} from "../../additionalData/constants/auth";
import {isValidEmail, isValidPassword} from "../../additionalData/validation";

const initialStateForSignIn = {
    email: '',
    password: '',
    isValidEmail: false,
    isValidPassword: false
};

export default (state = initialStateForSignIn, action) => {

    switch (action.type) {

        case CHANGE_EMAIL_IN: {
            return {
                ...state,
                email: action.email,
                isValidEmail: isValidEmail(action.email)
            }
        }
        case CHANGE_PASSWORD_IN: {
            return {
                ...state,
                password: action.password,
                isValidPassword: isValidPassword(action.password)
            }
        }
        case CLEAR_SIGN_IN: {
            return {
                ...initialStateForSignIn
            }
        }
        default:
            return state;
    }
}