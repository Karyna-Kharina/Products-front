import Cards from "../../containers/Cards";
import ProductList from "../../containers/ProductList";
import CreateProductForm from "../../containers/CreateProductForm";
import Cart from "../../containers/Cart";
import React from "react";
import {Route, Switch} from "react-router";

export default () => (
    <Switch>
        <Route exact path="/">
            <Cards/>
        </Route>

        <Route path="/admin">
            <ProductList/>
        </Route>

        <Route path="/add">
            <CreateProductForm/>
        </Route>

        <Route
            path="/cards">
            <Cards/>
        </Route>

        <Route path="/cart">
            <Cart/>
        </Route>

        <Route path="/update">
            <CreateProductForm/>
        </Route>
    </Switch>
);