import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { SIGN_IN, USER_PROFILE } from "../../utils/links/front";

const MenuComponent = ({ anchorEl, setAnchorEl, onLogOut }) => {
    const open = Boolean(anchorEl);
    const handleClose = () => setAnchorEl(null);

    return (
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem>
                <Button component={Link} to={USER_PROFILE} onClick={handleClose}>
                    Profile
                </Button>
            </MenuItem>

            <MenuItem>
                <Button component={Link} to={SIGN_IN} onClick={onLogOut}>
                    Log Out
                </Button>
            </MenuItem>
        </Menu>
    );
};

MenuComponent.propTypes = {
    anchorEl: PropTypes.object,
    setAnchorEl: PropTypes.func.isRequired,
    onLogOut: PropTypes.func.isRequired
};

export default MenuComponent;