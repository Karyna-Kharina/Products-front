import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import mainSaga from "./saga";
import table from "./reducers/table";
import productForm from "./reducers/productForm";
import productCart from "./reducers/productCart";
import userForm from "./reducers/userForm";
import profile from "./reducers/profile";
import signIn from "./reducers/auth/signIn";
import signUp from "./reducers/auth/signUp";
import messageInfo from "./reducers/info";

const reducers = {
    signIn,
    signUp,
    table,
    productForm,
    productCart,
    profile,
    userForm,
    messageInfo
};

const rootReducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mainSaga);

export default store;