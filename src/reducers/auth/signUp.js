import {
    CHANGE_CHECKBOX,
    CHANGE_DATE,
    CHANGE_EMAIL,
    CHANGE_FIRST_NAME,
    CHANGE_LAST_NAME,
    CHANGE_PASSWORD,
    CHANGE_PHONE,
    CHANGE_PHOTO,
    CLEAR_SIGN_UP
} from "../../additionalData/constants/auth";
import {
    isValidDate,
    isValidEmail,
    isValidImageUrl,
    isValidName,
    isValidPassword,
    isValidPhoneNumber
} from "../../additionalData/validation";

const initialStateForSignUp = {
    firstName: 'TestName',
    isValidFirstName: false,
    lastName: 'TestLastName',
    isValidLastName: false,
    date: new Date("1990-01-01"),
    isValidDate: false,
    email: '',
    isValidEmail: false,
    phoneNumber: '+380964502345',
    isValidPhoneNumber: false,
    photo: 'https://lh3.googleusercontent.com/proxy/OvqyfyoxP7Wvcfd8bU28i58H4F1vcONDj3Jta26i57iyBg3RDK4mZOpZq9wKbsZILRqRRdodsrrLZqAGe85a1K_JFHsYtQaYYTGwOxGQ4IzT',
    isValidPhoto: false,
    password: '',
    isValidPassword: false,
    isCheckedBox: false
};

export default (state = initialStateForSignUp, action) => {

    switch (action.type) {

        case CHANGE_FIRST_NAME: {
            return {
                ...state,
                firstName: action.firstName,
                isValidFirstName: isValidName(action.firstName)
            }
        }
        case CHANGE_LAST_NAME: {
            return {
                ...state,
                lastName: action.lastName,
                isValidLastName: isValidName(action.lastName)
            }
        }
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
        case CHANGE_DATE: {
            return {
                ...state,
                date: action.date,
                isValidDate: isValidDate(action.date)
            }
        }
        case CHANGE_PHONE: {
            return {
                ...state,
                phoneNumber: action.phone,
                isValidPhoneNumber: isValidPhoneNumber(action.phone)
            }
        }
        case CHANGE_PHOTO: {
            return {
                ...state,
                photo: action.photo,
                isValidPhoto: isValidImageUrl(action.photo)
            }
        }
        case CHANGE_CHECKBOX: {
            return {
                ...state,
                isCheckedBox: action.checkbox
            }
        }
        case CLEAR_SIGN_UP: {
            return {
                ...initialStateForSignUp
            }
        }
        default:
            return state;
    }
}