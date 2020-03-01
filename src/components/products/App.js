import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import {Link, Route, Switch} from "react-router-dom";
import HeaderIcon from "./components/HeaderIcon";
import Cards from "../../containers/Cards";
import Cart from "../../containers/Cart";

export default ({countProductsInCart}) => {
    return (
        <div>
            <AppBar position="absolute">

                <Box display="flex" justifyContent="flex-end" alignItems="center" pl={2} pr={2}>
                    <HeaderIcon/>
                    <Box flexGrow={1}>
                        <Typography variant="h5">
                            Product Cards
                        </Typography>
                    </Box>

                    <Box>
                        <Link to="/cart">
                            <IconButton>
                                <Badge badgeContent={countProductsInCart} color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>
                        </Link>
                    </Box>
                </Box>
            </AppBar>

            <Switch>
                <Route exact path="/">
                    <Cards/>
                </Route>

                <Route path="/cart">
                    <Cart/>
                </Route>
            </Switch>
        </div>
    )
}