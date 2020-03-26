import {
    CHANGE_USER_EMAIL,
    CHANGE_USER_FIRST_NAME,
    CHANGE_USER_ID,
    CHANGE_USER_LAST_NAME,
    CHANGE_USER_PASSWORD,
    CHANGE_USER_PHONE_NUMBER,
    CHANGE_USER_PHOTO,
    PUT_USER_TO_FORM,
    SAVE_USER
} from "../../constants";

const initialStateForUserForm = {
    user: {
        id: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        photo: '',
        password: ''
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
                    firstName: action.firstName
                }
            }
        }
        case CHANGE_USER_LAST_NAME: {
            return {
                ...state,
                user: {
                    ...state.user,
                    lastName: action.lastName
                }
            }
        }
        case CHANGE_USER_PHONE_NUMBER: {
            return {
                ...state,
                user: {
                    ...state.user,
                    phoneNumber: action.phoneNumber
                }
            }
        }
        case CHANGE_USER_EMAIL: {
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.email
                }
            }
        }
        case CHANGE_USER_PHOTO: {
            return {
                ...state,
                user: {
                    ...state.user,
                    photo: action.photo
                }
            }
        }
        case CHANGE_USER_PASSWORD: {
            return {
                ...state,
                user: {
                    ...state.user,
                    password: action.password
                }
            }
        }
        case PUT_USER_TO_FORM: {
            return {
                ...state,
                user: {...action.user}
            }
        }
        case SAVE_USER: {
            return {
                ...state,
                user: {...initialStateForUserForm.user}
            }
        }
        default:
            return state;
    }
}