import { isValidEmail, isValidPassword } from "../../additionalData/validation";
import { CHANGE_EMAIL_IN, CHANGE_PASSWORD_IN, CLEAR_SIGN_IN } from "../../additionalData/constants/auth";

const initialState = {
    email: "admin@gmail.com",
    password: "00000000",
    isValidEmail: true,
    isValidPassword: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_EMAIL_IN: {
            return {
                ...state,
                email: action.email,
                isValidEmail: isValidEmail(action.email)
            };
        }
        case CHANGE_PASSWORD_IN: {
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