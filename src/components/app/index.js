import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBarComponent from "../appBar";
import DrawerComponent from "../drawer";
import Routers from "../routers";

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
            <AppBarComponent photo={photo} logOut={logOut}/>
            <DrawerComponent countProductsInCart={countProductsInCart}/>

            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Routers/>
            </main>
        </div>
    );
};

App.propTypes = {
    countProductsInCart: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    logOut: PropTypes.func.isRequired
};

export default App;