import React from "react";
import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-ui/core";

const SignHeader = ({ style, Icon, name }) => (
    <>
        <Avatar className={style}>
            <Icon/>
        </Avatar>

        <Typography component={"h1"} variant={"h5"}>
            {name}
        </Typography>
    </>
);

SignHeader.propTypes = {
    style: PropTypes.string.isRequired,
    Icon: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

export default SignHeader;