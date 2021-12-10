import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Badge, Button, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import { PRODUCT_CART } from "../../additionalData/links/front";

const MenuElement = ({ linkTo, Icon, name, countProductsInCart }) => (
    <Button fullWidth to={linkTo} component={Link}>
        <ListItem>
            <ListItemIcon>
                {
                    linkTo === PRODUCT_CART ? (
                        <Badge badgeContent={countProductsInCart} color={"secondary"}>
                            <Icon/>
                        </Badge>
                    ) : <Icon/>
                }
            </ListItemIcon>

            <ListItemText primary={
                <Typography variant={"subtitle2"}>
                    {name}
                </Typography>
            }/>
        </ListItem>
    </Button>
);

MenuElement.propTypes = {
    linkTo: PropTypes.string.isRequired,
    Icon: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    countProductsInCart: PropTypes.number.isRequired
};

export default MenuElement;