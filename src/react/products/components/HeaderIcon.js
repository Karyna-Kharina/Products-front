import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import {ArrowBackIos, Menu} from "@material-ui/icons";
import React from "react";
import {withRouter} from "react-router";

const HomeIcon = () => (
    <Box>
        <Link to="/">
            <IconButton>
                <ArrowBackIos/>
            </IconButton>
        </Link>
    </Box>
);

const MenuIcon = () => (
    <Box>
        <IconButton>
            <Menu/>
        </IconButton>
    </Box>
);

function HeaderIcon(props) {

    console.log(props);

    const {location: {pathname}} = props;
    const isNeedBackButton = pathname !== "/";

    return (
        isNeedBackButton ? <HomeIcon/> : <MenuIcon/>
    )
}

export default withRouter(HeaderIcon);