import React from "react";
import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MenuElements } from "./MenuElements";
import MenuElement from "./MenuElement";

const useStyles = makeStyles({
    list: {
        color: "#64d1ff"
    }
});

const NavigationMenu = ({ menuElements, countProductsInCart }) => {
    const classes = useStyles();

    return (
        <List className={classes.list}>
            {
                menuElements.map(({ linkTo, Icon, name }) => (
                    <MenuElement
                        key={linkTo}
                        linkTo={linkTo}
                        Icon={Icon}
                        name={name}
                        countProductsInCart={countProductsInCart}
                    />
                ))
            }
        </List>
    );
};

NavigationMenu.defaultProps = {
    menuElements: MenuElements
};

export default NavigationMenu;