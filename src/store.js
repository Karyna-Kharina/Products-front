import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import app from "./reducers/reducer";

export default createStore(combineReducers({
    app
}), composeWithDevTools());