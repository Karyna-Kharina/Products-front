import React from "react";
import { Route, Switch } from "react-router";
import ProductCart from "../../containers/productCart";
import ProductCards from "../../containers/productCards";
import ProductList from "../../containers/products";
import UserList from "../../containers/users";
import UserForm from "../../containers/userForm";
import ProductForm from "../../containers/productForm";
import Profile from "../../containers/profile";
import {
    APP,
    CREATE_PRODUCT_FORM,
    CREATE_USER_FORM,
    PRODUCT_CARDS,
    PRODUCT_CART,
    PRODUCT_UPDATE,
    PRODUCTS,
    USER_PROFILE,
    USER_UPDATE,
    USERS
} from "../../utils/links/front";

const Routers = () => (
    <Switch>
        <Route exact path={APP}>
            <ProductCards/>
        </Route>

        <Route path={PRODUCTS}>
            <ProductList/>
        </Route>

        <Route path={CREATE_PRODUCT_FORM}>
            <ProductForm/>
        </Route>

        <Route path={PRODUCT_CARDS}>
            <ProductCards/>
        </Route>

        <Route path={PRODUCT_CART}>
            <ProductCart/>
        </Route>

        <Route path={PRODUCT_UPDATE}>
            <ProductForm/>
        </Route>

        <Route path={USERS}>
            <UserList/>
        </Route>

        <Route path={USER_PROFILE}>
            <Profile/>
        </Route>

        <Route path={USER_UPDATE}>
            <UserForm/>
        </Route>

        <Route path={CREATE_USER_FORM}>
            <UserForm/>
        </Route>
    </Switch>
);

export default Routers;