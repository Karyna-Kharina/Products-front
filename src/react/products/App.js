import React, {Component} from "react";
import productFixtures from "../../productFixtures";
import Cards from "./Cards";
import Cart from "./Cart";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import {Link, Route, Switch} from "react-router-dom";
import HeaderIcon from "./components/HeaderIcon";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: productFixtures,
            productsInCart: []
        }
    }

    onClickAddProduct(product) {
        console.log("onClickAddShoppingCart()", product);
        this.setState({productsInCart: [...this.state.productsInCart, product]});
    }

    onClickRemoveProduct(product) {
        console.log("onClickRemoveProduct()", product);

        const index = this.state.productsInCart.findIndex((el) => el.id === product.id);

        const newList = [
            ...this.state.productsInCart.slice(0, index),
            ...this.state.productsInCart.slice(index + 1)
        ];

        this.setState({
            productsInCart: newList
        });
    }

    render() {

        const {products, productsInCart} = this.state;
        console.log(this.props);


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
                                    <Badge badgeContent={productsInCart.length} color="secondary">
                                        <ShoppingCart/>
                                    </Badge>
                                </IconButton>
                            </Link>
                        </Box>
                    </Box>
                </AppBar>

                <Switch>
                    <Route exact path="/">
                        <Cards
                            products={products}
                            onClickAddProduct={(item) => this.onClickAddProduct(item)}
                        />
                    </Route>

                    <Route path="/cart">
                        <Cart
                            products={productsInCart}
                            onClickAddProduct={(item) => this.onClickAddProduct(item)}
                            onClickRemoveProduct={(item) => this.onClickRemoveProduct(item)}
                        />
                    </Route>
                </Switch>
            </div>
        )
    }
}