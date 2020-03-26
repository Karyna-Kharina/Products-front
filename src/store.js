import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import mainSaga from './saga';
import users from "./reducers/users/users";
import products from "./reducers/products/products";
import productForm from "./reducers/products/productForm";
import userForm from "./reducers/users/userForm";
import signIn from "./reducers/auth/signIn";
import signUp from "./reducers/auth/signUp";
import profile from "./reducers/users/profile";
import news from "./reducers/news/news";
import {composeWithDevTools} from "redux-devtools-extension";

const reducers = {
    signIn,
    signUp,
    products,
    productForm,
    users,
    profile,
    userForm,
    news
};

const rootReducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(
        sagaMiddleware
    )));

sagaMiddleware.run(mainSaga);

export default store;