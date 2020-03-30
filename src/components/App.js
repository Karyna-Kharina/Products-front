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
import {AccountCircle, Create, FiberNew, GroupAdd, Lock, People, ViewModule} from "@material-ui/icons";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Routers from "./Routers";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import {
    CREATE_PRODUCT_FORM,
    CREATE_USER_FORM,
    PRODUCT_CARDS,
    PRODUCT_CART,
    PRODUCT_LIST,
    SHOW_NEWS,
    USER_LIST,
    USER_PROFILE
} from "../links";
import Avatar from "@material-ui/core/Avatar";

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
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
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
                    <Grid item sm={12}>
                        <Typography variant="h6" noWrap>
                            Products
                        </Typography>
                    </Grid>

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
                                    <Link to={USER_PROFILE}>
                                        <MenuItem button>
                                            My profile
                                        </MenuItem>
                                    </Link>

                                    <MenuItem button onClick={logOut}>Logout</MenuItem>
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

                <List>
                    <Link to={USER_LIST}>
                        <ListItem button>
                            <ListItemIcon><People/></ListItemIcon>
                            <ListItemText primary={'Users'}/>
                        </ListItem>
                    </Link>

                    <Link to={CREATE_USER_FORM}>
                        <ListItem button>
                            <ListItemIcon><GroupAdd/></ListItemIcon>
                            <ListItemText primary={'Add User'}/>
                        </ListItem>
                    </Link>

                    <Link to={PRODUCT_LIST}>
                        <ListItem button>
                            <ListItemIcon><Lock/></ListItemIcon>
                            <ListItemText primary={'Products'}/>
                        </ListItem>
                    </Link>

                    <Link to={CREATE_PRODUCT_FORM}>
                        <ListItem button>
                            <ListItemIcon><Create/></ListItemIcon>
                            <ListItemText primary={'Add Product'}/>
                        </ListItem>
                    </Link>

                    <Link to={PRODUCT_CARDS}>
                        <ListItem button>
                            <ListItemIcon><ViewModule/></ListItemIcon>
                            <ListItemText primary={'Product Cards'}/>
                        </ListItem>
                    </Link>

                    <Link to={PRODUCT_CART}>
                        <ListItem button>
                            <ListItemIcon>
                                <Badge badgeContent={countProductsInCart} color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary={'Cart'}/>
                        </ListItem>
                    </Link>

                    <Link to={SHOW_NEWS}>
                        <ListItem button>
                            <ListItemIcon><FiberNew/></ListItemIcon>
                            <ListItemText primary={'News'}/>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Routers/>
            </main>
        </div>
    )
}