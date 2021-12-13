import { isValidEmail, isValidPassword } from "../../utils/validation";
import { CHANGE_EMAIL_AT_LOGIN, CHANGE_PASSWORD_AT_LOGIN, CLEAR_SIGN_IN } from "../../utils/constants/auth";

const initialState = {
    email: "admin@gmail.com",
    password: "00000000",
    isValidEmail: true,
    isValidPassword: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_EMAIL_AT_LOGIN: {
            return {
                ...state,
                email: action.email,
                isValidEmail: isValidEmail(action.email)
            };
        }
        case CHANGE_PASSWORD_AT_LOGIN: {
            return {
                ...state,
                password: action.password,
                isValidPassword: isValidPassword(action.password)
            };
        }
        case CLEAR_SIGN_IN: {
            return {
                ...initialState
            };
        }
        default:
            return state;
    }
}