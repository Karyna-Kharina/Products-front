import { getFormattedDate } from "../../additionalData/methods";
import {
    isValidDate,
    isValidEmail,
    isValidImageUrl,
    isValidName,
    isValidPassword,
    isValidPhoneNumber
} from "../../additionalData/validation";
import {
    CHANGE_BIRTHDAY,
    CHANGE_EMAIL,
    CHANGE_FIRST_NAME,
    CHANGE_LAST_NAME,
    CHANGE_PASSWORD,
    CHANGE_PHONE,
    CHANGE_PHOTO,
    CLEAR_SIGN_UP
} from "../../additionalData/constants/auth";
import { MIN_DATE } from "../../additionalData/constants/dates";

const initialState = {
    firstName: "First Name",
    isValidFirstName: true,
    lastName: "Last Name",
    isValidLastName: true,
    birthday: getFormattedDate(MIN_DATE),
    isValidBirthday: true,
    email: "",
    isValidEmail: false,
    phoneNumber: "+380964502345",
    isValidPhoneNumber: true,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Sc4PFchrEZb4f1dO2qe5YacCM1PaSX7P23cWsOGXYwVF_D0KQEuG6pmPOlx6-4pk68U&usqp=CAU",
    isValidPhoto: true,
    password: "",
    isValidPassword: false
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
        case CHANGE_BIRTHDAY: {
            return {
                ...state,
                birthday: action.birthday,
                isValidBirthday: isValidDate(action.birthday)
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
        case CLEAR_SIGN_UP: {
            return {
                ...initialState
            };
        }
        default:
            return state;
    }
}