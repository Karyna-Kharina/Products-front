import {CHANGE_EMAIL_IN, CHANGE_PASSWORD_IN, CLEAR_SIGN_IN} from "../../constants";
import {isValidEmail, isValidPassword} from "../../validation";

const initialStateForSignIn = {email: '', password: '', isValidEmail: false, isValidPassword: false};

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