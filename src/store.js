import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import app from "./reducers/products";
import form from "./reducers/form";
import signIn from "./reducers/signIn";
import signUp from "./reducers/signUp";

export default createStore(combineReducers({
    app,
    form,
    signIn,
    signUp
}), composeWithDevTools());