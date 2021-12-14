import { MAX_DATE } from "../../utils/constants/dates";
import {
    isValidDate,
    isValidEmail,
    isValidImageUrl,
    isValidName,
    isValidPassword,
    isValidPhoneNumber
} from "../../utils/validation";
import {
    CHANGE_USER_BIRTHDAY,
    CHANGE_USER_EMAIL,
    CHANGE_USER_FIRST_NAME,
    CHANGE_USER_ID,
    CHANGE_USER_LAST_NAME,
    CHANGE_USER_PASSWORD,
    CHANGE_USER_PHONE_NUMBER,
    CHANGE_USER_PHOTO,
    CLEAR_USER_FORM,
    PUT_USER_TO_FORM
} from "../../utils/constants/users";

const initialState = {
    id: "",
    firstName: "",
    isValidFirstName: false,
    lastName: "",
    isValidLastName: false,
    birthday: MAX_DATE,
    isValidBirthday: true,
    email: "",
    isValidEmail: false,
    phoneNumber: "",
    isValidPhoneNumber: false,
    photo: "",
    isValidPhoto: false,
    password: "",
    isValidPassword: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER_ID: {
            return {
                ...state,
                id: action.id
            };
        }
        case CHANGE_USER_FIRST_NAME: {
            return {
                ...state,
                firstName: action.firstName,
                isValidFirstName: isValidName(action.firstName)
            };
        }
        case CHANGE_USER_LAST_NAME: {
            return {
                ...state,
                lastName: action.lastName,
                isValidLastName: isValidName(action.lastName)
            };
        }
        case CHANGE_USER_BIRTHDAY: {
            return {
                ...state,
                birthday: action.birthday,
                isValidBirthday: isValidDate(action.birthday)
            };
        }
        case CHANGE_USER_PHONE_NUMBER: {
            return {
                ...state,
                phoneNumber: action.phoneNumber,
                isValidPhoneNumber: isValidPhoneNumber(action.phoneNumber)
            };
        }
        case CHANGE_USER_EMAIL: {
            return {
                ...state,
                email: action.email,
                isValidEmail: isValidEmail(action.email)
            };
        }
        case CHANGE_USER_PHOTO: {
            return {
                ...state,
                photo: action.photo,
                isValidPhoto: isValidImageUrl(action.photo)
            };
        }
        case CHANGE_USER_PASSWORD: {
            return {
                ...state,
                password: action.password,
                isValidPassword: isValidPassword(action.password)
            };
        }
        case PUT_USER_TO_FORM: {
            const { firstName, lastName, birthday, email, phoneNumber, photo, password } = action.user;

            return {
                ...action.user,
                isValidFirstName: isValidName(firstName),
                isValidLastName: isValidName(lastName),
                isValidBirthday: isValidDate(birthday),
                isValidEmail: isValidEmail(email),
                isValidPhoneNumber: isValidPhoneNumber(phoneNumber),
                isValidPhoto: isValidImageUrl(photo),
                isValidPassword: isValidPassword(password)
            };
        }
        case CLEAR_USER_FORM: {
            return {
                ...initialState.user
            };
        }
        default:
            return state;
    }
}