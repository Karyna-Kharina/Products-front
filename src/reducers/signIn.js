import {CHANGE_EMAIL, CHANGE_PASSWORD} from "../constants";
import {isValidEmail, isValidPassword} from "../validation";

const initialStateForSignIn = {email: '', password: '', isValidEmail: false, isValidPassword: false};

export default (state = initialStateForSignIn, action) => {

    switch (action.type) {

        case CHANGE_EMAIL: {
            return {
                ...state,
                email: action.email,
                isValidEmail: isValidEmail(action.email)
            }
        }
        case CHANGE_PASSWORD: {
            return {
                ...state,
                password: action.password,
                isValidPassword: isValidPassword(action.password)
            }
        }
        default:
            return state;
    }
}