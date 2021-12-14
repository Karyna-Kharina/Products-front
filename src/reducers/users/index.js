import { CHANGE_FILTERED_USERNAME, SET_USERS } from "../../utils/constants/users";

const initialState = {
    list: [],
    filteredName: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FILTERED_USERNAME: {
            return {
                ...state,
                filteredName: action.filteredName
            };
        }
        case SET_USERS: {
            return {
                ...state,
                list: action.users
            };
        }
        default:
            return state;
    }
}