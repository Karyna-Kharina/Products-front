import { SET_MESSAGE_INFO } from "../../additionalData/constants/info";

const initialState = { message: null };

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE_INFO: {
            return {
                ...state,
                message: action.message
            };
        }
        default:
            return state;
    }
}