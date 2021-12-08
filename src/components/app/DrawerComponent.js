import React from "react";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavigationMenu from "../navigationMenu";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    drawer: {
        width: 250,
        flexShrink: 0
    },
    drawerPaper: {
        width: 250,
        backgroundColor: "rgba(40,106,153,0.02)"
    }
}));

const DrawerComponent = ({ countProductsInCart }) => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
            variant={"permanent"}
            open={true}
        >
            <div className={classes.toolbar}/>
            <NavigationMenu countProductsInCart={countProductsInCart}/>
        </Drawer>
    );
};

export default DrawerComponent;