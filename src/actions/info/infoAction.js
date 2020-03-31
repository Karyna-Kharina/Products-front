import {SET_MESSAGE_INFO} from "../../additionalData/constants/info";

export const setMessageInfo = (message) => ({
    type: SET_MESSAGE_INFO,
    message
});

export const closeMessage = () => ({
    type: SET_MESSAGE_INFO,
    message: null
});
