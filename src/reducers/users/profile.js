import {SET_CURRENT_USER} from "../../constants";

const initialState = {
    current: {
        id: "1",
        firstName: "Leyla",
        lastName: "Ramzi",
        email: "leylaramzi@gmail.com",
        phoneNumber: "+380994561230",
        password: "12345678",
        photo: "https://i.redd.it/1nyn34drl0l31.jpg"
    }
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENT_USER: {
            return {
                ...state,
                current: action.user
            }
        }
        default:
            return state;
    }
}