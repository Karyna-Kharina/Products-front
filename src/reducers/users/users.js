import {CHANGE_FILTERED_USERNAME, REMOVE_USER, SAVE_USER, SET_USERS, SWAP} from "../../constants";
import {removeItemFrom, saveItemTo} from "../../methods";

const initialState = {users: [], filteredName: ''};

export default (state = initialState, action) => {

    switch (action.type) {

        case SAVE_USER: {
            return {
                ...state,
                users: saveItemTo(state.users, action.user)
            }
        }
        case REMOVE_USER: {
            return {
                ...state,
                users: removeItemFrom(state.users, action.user)
            }
        }
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