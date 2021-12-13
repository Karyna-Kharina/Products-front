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
    user: {
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
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER_ID: {
            return {
                ...state,
                user: {
                    ...state.user,
                    id: action.id
                }
            };
        }
        case CHANGE_USER_FIRST_NAME: {
            return {
                ...state,
                user: {
                    ...state.user,
                    firstName: action.firstName,
                    isValidFirstName: isValidName(action.firstName)
                }
            };
        }
        case CHANGE_USER_LAST_NAME: {
            return {
                ...state,
                user: {
                    ...state.user,
                    lastName: action.lastName,
                    isValidLastName: isValidName(action.lastName)
                }
            };
        }
        case CHANGE_USER_BIRTHDAY: {
            return {
                ...state,
                user: {
                    ...state.user,
                    birthday: action.birthday,
                    isValidBirthday: isValidDate(action.birthday)
                }
            };
        }
        case CHANGE_USER_PHONE_NUMBER: {
            return {
                ...state,
                user: {
                    ...state.user,
                    phoneNumber: action.phoneNumber,
                    isValidPhoneNumber: isValidPhoneNumber(action.phoneNumber)
                }
            };
        }
        case CHANGE_USER_EMAIL: {
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.email,
                    isValidEmail: isValidEmail(action.email)
                }
            };
        }
        case CHANGE_USER_PHOTO: {
            return {
                ...state,
                user: {
                    ...state.user,
                    photo: action.photo,
                    isValidPhoto: isValidImageUrl(action.photo)
                }
            };
        }
        case CHANGE_USER_PASSWORD: {
            return {
                ...state,
                user: {
                    ...state.user,
                    password: action.password,
                    isValidPassword: isValidPassword(action.password)
                }
            };
        }
        case PUT_USER_TO_FORM: {
            const { firstName, lastName, birthday, email, phoneNumber, photo, password } = action.user;

            return {
                ...state,
                user: {
                    ...action.user,
                    isValidFirstName: isValidName(firstName),
                    isValidLastName: isValidName(lastName),
                    isValidBirthday: isValidDate(birthday),
                    isValidEmail: isValidEmail(email),
                    isValidPhoneNumber: isValidPhoneNumber(phoneNumber),
                    isValidPhoto: isValidImageUrl(photo),
                    isValidPassword: isValidPassword(password)
                }
            };
        }
        case CLEAR_USER_FORM: {
            return {
                ...state,
                user: { ...initialState.user }
            };
        }
        default:
            return state;
    }
}