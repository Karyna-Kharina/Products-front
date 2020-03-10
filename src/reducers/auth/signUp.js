import {
    CHANGE_CHECKBOX,
    CHANGE_DATE,
    CHANGE_EMAIL,
    CHANGE_FIRST_NAME,
    CHANGE_LAST_NAME,
    CHANGE_PASSWORD,
    CHANGE_PHONE
} from "../../constants";
import {isValidEmail, isValidName, isValidPassword, isValidPhoneNumber} from "../../validation";

const initialStateForSignUp = {
    firstName: 'Businka',
    isValidFirstName: true,
    lastName: 'Lala',
    isValidLastName: true,
    email: 'blablabla@gmail.com',
    isValidEmail: true,
    phoneNumber: '+380996100899',
    isValidPhoneNumber: true,
    password: '123456789',
    isValidPassword: true,
    isCheckedBox: false,
    selectedDate: new Date()
};

export default  (state = initialStateForSignUp, action) => {

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
                selectedDate: action.date,
            }
        }
        case CHANGE_PHONE: {
            return {
                ...state,
                phoneNumber: action.phone,
                isValidPhoneNumber: isValidPhoneNumber(action.phone)
            }
        }
        case CHANGE_CHECKBOX: {
            return {
                ...state,
                isCheckedBox: action.checkbox
            }
        }
        default:
            return state;
    }
}