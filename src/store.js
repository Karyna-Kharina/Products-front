import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import users from "./reducers/users/users";
import products from "./reducers/products/products";
import productForm from "./reducers/products/productForm";
import userForm from "./reducers/users/userForm";
import signIn from "./reducers/auth/signIn";
import signUp from "./reducers/auth/signUp";

export default createStore(combineReducers({
    signIn,
    signUp,
    products,
    productForm,
    users,
    userForm
}), composeWithDevTools());