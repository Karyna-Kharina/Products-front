import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Routers from "../Routers";
import AppBarComponent from "./AppBarComponent";
import DrawerComponent from "./DrawerComponent";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        display: "flex"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

const App = ({ countProductsInCart, photo, logOut }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBarComponent photo={photo} logOut={logOut}/>
            <DrawerComponent countProductsInCart={countProductsInCart}/>

            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Routers/>
            </main>
        </div>
    );
};

export default App;