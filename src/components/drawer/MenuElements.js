import React from "react";
import { Lock, People, ShoppingCart, ViewModule } from "@material-ui/icons";
import { PRODUCT_CARDS, PRODUCT_CART, PRODUCTS, USERS } from "../../additionalData/links/front";

export const MenuElements = [
    {
        linkTo: PRODUCTS,
        Icon: () => <Lock/>,
        name: "Products"
    },
    {
        linkTo: PRODUCT_CARDS,
        Icon: () => <ViewModule/>,
        name: "Product Cards"
    },
    {
        linkTo: PRODUCT_CART,
        Icon: () => <ShoppingCart/>,
        name: "Cart"
    },
    {
        linkTo: USERS,
        Icon: () => <People/>,
        name: "Users"
    }
];