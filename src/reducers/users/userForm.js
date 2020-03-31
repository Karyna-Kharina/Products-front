import {
    isValidEmail,
    isValidName,
    isValidPassword,
    isValidPhoneNumber,
    isValidPhoto
} from "../../additionalData/validation";
import {
    CHANGE_USER_EMAIL,
    CHANGE_USER_FIRST_NAME,
    CHANGE_USER_ID,
    CHANGE_USER_LAST_NAME,
    CHANGE_USER_PASSWORD,
    CHANGE_USER_PHONE_NUMBER,
    CHANGE_USER_PHOTO,
    CLEAR_USER_FORM,
    PUT_USER_TO_FORM
} from "../../additionalData/constants/user";

const initialStateForUserForm = {
    user: {
        id: '',
        firstName: '',
        isValidFirstName: false,
        lastName: '',
        isValidLastName: false,
        email: '',
        isValidEmail: false,
        phoneNumber: '',
        isValidPhoneNumber: false,
        photo: '',
        isValidPhoto: false,
        password: '',
        isValidPassword: false,
    }
};

export default (state = initialStateForUserForm, action) => {

    switch (action.type) {

        case CHANGE_USER_ID: {
            return {
                ...state,
                user: {
                    ...state.user,
                    id: action.id
                }
            }
        }
        case CHANGE_USER_FIRST_NAME: {
            return {
                ...state,
                user: {
                    ...state.user,
                    firstName: action.firstName,
                    isValidFirstName: isValidName(action.firstName)
                }
            }
        }
        case CHANGE_USER_LAST_NAME: {
            return {
                ...state,
                user: {
                    ...state.user,
                    lastName: action.lastName,
                    isValidLastName: isValidName(action.lastName)
                }
            }
        }
        case CHANGE_USER_PHONE_NUMBER: {
            return {
                ...state,
                user: {
                    ...state.user,
                    phoneNumber: action.phoneNumber,
                    isValidPhoneNumber: isValidPhoneNumber(action.phoneNumber)
                }
            }
        }
        case CHANGE_USER_EMAIL: {
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.email,
                    isValidEmail: isValidEmail(action.email)
                }
            }
        }
        case CHANGE_USER_PHOTO: {
            return {
                ...state,
                user: {
                    ...state.user,
                    photo: action.photo,
                    isValidPhoto: isValidPhoto(action.photo)
                }
            }
        }
        case CHANGE_USER_PASSWORD: {
            return {
                ...state,
                user: {
                    ...state.user,
                    password: action.password,
                    isValidPassword: isValidPassword(action.password)
                }
            }
        }
        case PUT_USER_TO_FORM: {
            return {
                ...state,
                user: {
                    ...action.user,
                    isValidFirstName: isValidName(action.user.firstName),
                    isValidLastName: isValidName(action.user.lastName),
                    isValidEmail: isValidEmail(action.user.email),
                    isValidPhoneNumber: isValidPhoneNumber(action.user.phoneNumber),
                    isValidPhoto: isValidPhoto(action.user.photo),
                    isValidPassword: isValidPassword(action.user.password)
                }
            }
        }
        case CLEAR_USER_FORM: {
            return {
                ...state,
                user: {...initialStateForUserForm.user}
            }
        }
        default:
            return state;
    }
}