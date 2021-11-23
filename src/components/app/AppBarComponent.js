import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SIGN_IN, USER_PROFILE } from "../../additionalData/links/front";

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    title: {
        flexGrow: 1
    }
}));

const AppBarComponent = ({ photo, logOut }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [auth] = React.useState(true);
    const open = Boolean(anchorEl);

    const handleMenu = event => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <AppBar position={"fixed"} className={classes.appBar}>
            <Toolbar>
                <Typography variant={"h5"} className={classes.title}>
                    Products
                </Typography>

                <Box ml={8}>
                    {auth && (
                        <div>
                            <IconButton
                                aria-label={"account of current user"}
                                aria-controls={"menu-appbar"}
                                aria-haspopup={"true"}
                                onClick={handleMenu}
                                color={"inherit"}
                            >
                                <Avatar src={photo}/>
                            </IconButton>

                            <Menu
                                id={"menu-appbar"}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem>
                                    <Button color={"inherit"} to={USER_PROFILE} component={Link}>
                                        Profile
                                    </Button>
                                </MenuItem>

                                <MenuItem>
                                    <Button color={"inherit"} onClick={logOut} to={SIGN_IN} component={Link}>
                                        Log Out
                                    </Button>
                                </MenuItem>
                            </Menu>
                        </div>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;