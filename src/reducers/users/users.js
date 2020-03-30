import {CHANGE_FILTERED_USERNAME, SET_USERS, SWAP} from "../../constants";

const initialState = {users: [], filteredName: ''};

export default (state = initialState, action) => {

    switch (action.type) {

        case SWAP: {
            return {
                ...state,
                users: [...state.users].reverse()
            }
        }
        case CHANGE_FILTERED_USERNAME: {
            return {
                ...state,
                filteredName: action.filteredName
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        default:
            return state;
    }
}