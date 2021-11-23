import {
    isValidDate,
    isValidEmail,
    isValidImageUrl,
    isValidName,
    isValidPassword,
    isValidPhoneNumber
} from "../../additionalData/validation";
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

const initialState = {
    firstName: "TestName",
    isValidFirstName: true,
    lastName: "TestLastName",
    isValidLastName: true,
    date: new Date("1990-01-01"),
    isValidDate: true,
    email: "",
    isValidEmail: false,
    phoneNumber: "+380964502345",
    isValidPhoneNumber: true,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Sc4PFchrEZb4f1dO2qe5YacCM1PaSX7P23cWsOGXYwVF_D0KQEuG6pmPOlx6-4pk68U&usqp=CAU",
    isValidPhoto: true,
    password: "",
    isValidPassword: false,
    isCheckedBox: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FIRST_NAME: {
            return {
                ...state,
                firstName: action.firstName,
                isValidFirstName: isValidName(action.firstName)
            };
        }
        case CHANGE_LAST_NAME: {
            return {
                ...state,
                lastName: action.lastName,
                isValidLastName: isValidName(action.lastName)
            };
        }
        case CHANGE_EMAIL: {
            return {
                ...state,
                email: action.email,
                isValidEmail: isValidEmail(action.email)
            };
        }
        case CHANGE_PASSWORD: {
            return {
                ...state,
                password: action.password,
                isValidPassword: isValidPassword(action.password)
            };
        }
        case CHANGE_DATE: {
            return {
                ...state,
                date: action.date,
                isValidDate: isValidDate(action.date)
            };
        }
        case CHANGE_PHONE: {
            return {
                ...state,
                phoneNumber: action.phone,
                isValidPhoneNumber: isValidPhoneNumber(action.phone)
            };
        }
        case CHANGE_PHOTO: {
            return {
                ...state,
                photo: action.photo,
                isValidPhoto: isValidImageUrl(action.photo)
            };
        }
        case CHANGE_CHECKBOX: {
            return {
                ...state,
                isCheckedBox: action.checkbox
            };
        }
        case CLEAR_SIGN_UP: {
            return {
                ...initialState
            };
        }
        default:
            return state;
    }
}