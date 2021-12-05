import React from "react";
import { Route, Switch } from "react-router";
import ProductCart from "../../containers/products/ProductCart";
import ProductCards from "../../containers/products/ProductCards";
import ProductList from "../../containers/products";
import UserList from "../../containers/users";
import CreateUserForm from "../../containers/userForm";
import CreateProductForm from "../../containers/productForm";
import Profile from "../../containers/profile";
import {
    APP,
    CREATE_PRODUCT_FORM,
    CREATE_USER_FORM,
    PRODUCT_CARDS,
    PRODUCT_CART,
    PRODUCTS,
    PRODUCT_UPDATE,
    USERS,
    USER_PROFILE,
    USER_UPDATE
} from "../../additionalData/links/front";

const Routers = () => (
    <Switch>
        <Route exact path={APP}>
            <ProductCards/>
        </Route>

        <Route path={PRODUCTS}>
            <ProductList/>
        </Route>

        <Route path={CREATE_PRODUCT_FORM}>
            <CreateProductForm/>
        </Route>

        <Route path={PRODUCT_CARDS}>
            <ProductCards/>
        </Route>

        <Route path={PRODUCT_CART}>
            <ProductCart/>
        </Route>

        <Route path={PRODUCT_UPDATE}>
            <CreateProductForm/>
        </Route>

        <Route path={USERS}>
            <UserList/>
        </Route>

        <Route path={USER_PROFILE}>
            <Profile/>
        </Route>

        <Route path={USER_UPDATE}>
            <CreateUserForm/>
        </Route>

        <Route path={CREATE_USER_FORM}>
            <CreateUserForm/>
        </Route>
    </Switch>
);

export default Routers;