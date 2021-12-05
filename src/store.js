import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import mainSaga from "./saga";
import users from "./reducers/users";
import products from "./reducers/products";
import productForm from "./reducers/productForm";
import userForm from "./reducers/userForm";
import signIn from "./reducers/auth/signIn";
import signUp from "./reducers/auth/signUp";
import profile from "./reducers/profile";
import messageInfo from "./reducers/info";

const reducers = {
    signIn,
    signUp,
    products,
    productForm,
    users,
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