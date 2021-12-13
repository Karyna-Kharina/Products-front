import React from "react";
import PropTypes from "prop-types";
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuComponent from "./MenuComponent";

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: theme.zIndex.drawer + 1
    },
    title: {
        flexGrow: 1
    }
}));

const AppBarComponent = ({ photo, onLogOut }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => setAnchorEl(event.currentTarget);

    return (
        <AppBar className={classes.root} position={"fixed"}>
            <Toolbar>
                <Typography className={classes.title} variant={"h5"}>
                    Products
                </Typography>

                <IconButton onClick={handleMenu}>
                    <Avatar src={photo}/>
                </IconButton>

                <MenuComponent
                    anchorEl={anchorEl}
                    setAnchorEl={setAnchorEl}
                    onLogOut={onLogOut}
                />
            </Toolbar>
        </AppBar>
    );
};

AppBarComponent.propTypes = {
    photo: PropTypes.string.isRequired,
    onLogOut: PropTypes.func.isRequired
};

export default AppBarComponent;