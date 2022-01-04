import { MAX_DATE } from "../../utils/constants/dates";
import { PRODUCTS_KEY, USERS_KEY } from "../../utils/constants/tableKeys";
import { CHANGE_FORM_DATA, CLEAR_FORM, SET_FORM_DATA } from "../../utils/constants/form";

const initialState = {
    [PRODUCTS_KEY]: {
        id: "",
        name: "",
        isValidName: false,
        price: "",
        isValidPrice: false,
        image: "",
        isValidImage: false
    },
    [USERS_KEY]: {
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
        case SET_FORM_DATA: {
            const { formKey, formData } = action;

            return {
                ...state,
                [formKey]: formData
            };
        }
        case CHANGE_FORM_DATA: {
            const { formKey, key, value } = action;

            return {
                ...state,
                [formKey]: {
                    ...state[formKey],
                    [key]: value
                }
            };
        }
        case CLEAR_FORM: {
            const { formKey } = action;

            return {
                ...state,
                [formKey]: initialState[formKey]
            };
        }
        default:
            return state;
    }
}