import React from "react";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import {Create, FiberNew, Lock, People, ViewModule} from "@material-ui/icons";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Routers from "./Routers";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
    CREATE_PRODUCT_FORM,
    PRODUCT_CARDS,
    PRODUCT_CART,
    PRODUCT_LIST,
    SHOW_NEWS,
    SIGN_IN,
    USER_LIST,
    USER_PROFILE
} from "../additionalData/links/front";
import {Button} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => (
    {
        toolbar: theme.mixins.toolbar,
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            width: 250,
            flexShrink: 0,
        },
        drawerPaper: {
            width: 250,
            backgroundColor: 'rgba(40,106,153,0.02)',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        divider: {
            margin: '1%',
            backgroundColor: theme.palette.primary.light
        },
    }));

export default ({countProductsInCart, photo, logOut}) => {

    const classes = useStyles();

    const [auth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>

            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Products
                    </Typography>

                    <Box ml={8}>
                        {auth && (
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <Avatar src={photo}/>
                                </IconButton>

                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem>
                                        <Button color='inherit' to={USER_PROFILE} component={Link}>
                                            Profile
                                        </Button>
                                    </MenuItem>

                                    <MenuItem>
                                        <Button color='inherit' onClick={logOut} to={SIGN_IN} component={Link}>
                                            Log Out
                                        </Button>
                                    </MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent"
                open={true}
            >
                <div className={classes.toolbar}/>

                <List style={{color: "#64d1ff"}}>
                    <Button color='inherit' fullWidth to={PRODUCT_LIST} component={Link}>
                        <ListItem>
                            <ListItemIcon><Lock/></ListItemIcon>
                            <ListItemText primary={
                                <Typography variant="subtitle2">
                                    Products
                                </Typography>}
                            />
                        </ListItem>
                    </Button>

                    <Button color='inherit' fullWidth to={CREATE_PRODUCT_FORM} component={Link}>
                        <ListItem>
                            <ListItemIcon><Create/></ListItemIcon>
                            <ListItemText primary={
                                <Typography variant="subtitle2">
                                    Add Product
                                </Typography>}
                            />
                        </ListItem>
                    </Button>

                    <Button color='inherit' fullWidth to={PRODUCT_CARDS} component={Link}>
                        <ListItem>
                            <ListItemIcon><ViewModule/></ListItemIcon>
                            <ListItemText primary={
                                <Typography variant="subtitle2">
                                    Product Cards
                                </Typography>}
                            />
                        </ListItem>
                    </Button>

                    <Button color='inherit' fullWidth to={PRODUCT_CART} component={Link}>
                        <ListItem>
                            <ListItemIcon>
                                <Badge badgeContent={countProductsInCart} color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                            </ListItemIcon>

                            <ListItemText primary={
                                <Typography variant="subtitle2">
                                    Cart
                                </Typography>}
                            />
                        </ListItem>
                    </Button>

                    <Divider className={classes.divider}/>

                    <Button color='inherit' fullWidth to={USER_LIST} component={Link}>
                        <ListItem>
                            <ListItemIcon><People/></ListItemIcon>
                            <ListItemText primary={
                                <Typography variant="subtitle2">
                                    Users
                                </Typography>}
                            />
                        </ListItem>
                    </Button>

                    <Divider className={classes.divider}/>

                    <Button color='inherit' fullWidth to={SHOW_NEWS} component={Link}>
                        <ListItem>
                            <ListItemIcon><FiberNew/></ListItemIcon>
                            <ListItemText primary={
                                <Typography variant="subtitle2">
                                    News
                                </Typography>}
                            />
                        </ListItem>
                    </Button>

                    <Divider className={classes.divider}/>
                </List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Routers/>
            </main>
        </div>
    )
}