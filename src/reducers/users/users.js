import userFixtures from "../../userFixtures";
import {CHANGE_FILTERED_USERNAME, REMOVE_USER, SAVE_USER, SWAP} from "../../constants";
import {removeItemFrom, saveItemTo} from "../../methods";

const initialState = {users: userFixtures, filteredName: ''};

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
        default:
            return state;
    }
}