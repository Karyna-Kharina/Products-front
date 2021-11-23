import React from "react";
import { Link } from "react-router-dom";
import {
    Badge,
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@material-ui/core";
import { Create, FiberNew, Lock, People, ShoppingCart, ViewModule } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import {
    CREATE_PRODUCT_FORM,
    PRODUCT_CARDS,
    PRODUCT_CART,
    PRODUCT_LIST,
    SHOW_NEWS,
    USER_LIST
} from "../../additionalData/links/front";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    drawer: {
        width: 250,
        flexShrink: 0
    },
    drawerPaper: {
        width: 250,
        backgroundColor: "rgba(40,106,153,0.02)"
    },
    list: {
        color: "#64d1ff"
    },
    divider: {
        margin: "1%",
        backgroundColor: theme.palette.primary.light
    }
}));

const DrawerComponent = ({countProductsInCart}) => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper
            }}
            variant={"permanent"}
            open={true}
        >
            <div className={classes.toolbar}/>

            <List className={classes.list}>
                <Button color={"inherit"} fullWidth to={PRODUCT_LIST} component={Link}>
                    <ListItem>
                        <ListItemIcon><Lock/></ListItemIcon>
                        <ListItemText primary={
                            <Typography variant={"subtitle2"}>
                                Products
                            </Typography>
                        }
                        />
                    </ListItem>
                </Button>

                <Button color={"inherit"} fullWidth to={CREATE_PRODUCT_FORM} component={Link}>
                    <ListItem>
                        <ListItemIcon><Create/></ListItemIcon>
                        <ListItemText primary={
                            <Typography variant={"subtitle2"}>
                                Add Product
                            </Typography>
                        }
                        />
                    </ListItem>
                </Button>

                <Button color={"inherit"} fullWidth to={PRODUCT_CARDS} component={Link}>
                    <ListItem>
                        <ListItemIcon><ViewModule/></ListItemIcon>
                        <ListItemText primary={
                            <Typography variant={"subtitle2"}>
                                Product Cards
                            </Typography>
                        }
                        />
                    </ListItem>
                </Button>

                <Button color={"inherit"} fullWidth to={PRODUCT_CART} component={Link}>
                    <ListItem>
                        <ListItemIcon>
                            <Badge badgeContent={countProductsInCart} color={"secondary"}>
                                <ShoppingCart/>
                            </Badge>
                        </ListItemIcon>

                        <ListItemText primary={
                            <Typography variant={"subtitle2"}>
                                Cart
                            </Typography>
                        }
                        />
                    </ListItem>
                </Button>

                <Divider className={classes.divider}/>

                <Button color={"inherit"} fullWidth to={USER_LIST} component={Link}>
                    <ListItem>
                        <ListItemIcon><People/></ListItemIcon>
                        <ListItemText primary={
                            <Typography variant={"subtitle2"}>
                                Users
                            </Typography>
                        }
                        />
                    </ListItem>
                </Button>

                <Divider className={classes.divider}/>

                <Button color={"inherit"} fullWidth to={SHOW_NEWS} component={Link}>
                    <ListItem>
                        <ListItemIcon><FiberNew/></ListItemIcon>
                        <ListItemText primary={
                            <Typography variant={"subtitle2"}>
                                News
                            </Typography>
                        }
                        />
                    </ListItem>
                </Button>

                <Divider className={classes.divider}/>
            </List>
        </Drawer>
    );
};

export default DrawerComponent;