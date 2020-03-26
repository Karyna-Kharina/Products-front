import {combineReducers, createStore} from "redux";
import rootReducer from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {render} from "react-dom";
import {Provider} from "react-redux";
import App from "./app";
import React from "react";

const store = createStore(combineReducers({
    rootReducer
}), composeWithDevTools());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
