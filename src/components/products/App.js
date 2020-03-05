import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import {Lock, ViewModule} from "@material-ui/icons";
import Cards from "../../containers/Cards";
import Cart from "../../containers/Cart";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Routers from "./Routers";

const useStyles = makeStyles(theme => ({
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
    toolbar: theme.mixins.toolbar,
}));

export default ({countProductsInCart}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>

            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Products
                    </Typography>
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
                    <Link to="/admin">
                        <ListItem button>
                            <ListItemIcon><Lock/></ListItemIcon>
                            <ListItemText primary={'Admin Panel'}/>
                        </ListItem>
                    </Link>

                    <Link to="/add">
                        <ListItem button>
                            <ListItemIcon><Lock/></ListItemIcon>
                            <ListItemText primary={'Create Product'}/>
                        </ListItem>
                    </Link>

                    <Divider/>

                    <Link to="/cards">
                        <ListItem button>
                            <ListItemIcon><ViewModule/></ListItemIcon>
                            <ListItemText primary={'Cards'}/>
                        </ListItem>
                    </Link>

                    <Link to="/cart">
                        <ListItem button>
                            <ListItemIcon>
                                <Badge badgeContent={countProductsInCart} color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary={'Cart'}/>
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