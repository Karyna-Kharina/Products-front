import {SET_CURRENT_USER} from "../../constants";

const initialState = {
    current: JSON.parse(sessionStorage.getItem("current"))
};

export default (state = initialState, action) => {

    switch (action.type) {

        case SET_CURRENT_USER: {
            sessionStorage.setItem("current", JSON.stringify(action.user));

            return {
                ...state,
                current: action.user
            }
        }
        default:
            return state;
    }
}