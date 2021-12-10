import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";

const SignFooter = ({ linkTo, name }) => (
    <Grid container justifyContent={"flex-end"}>
        <Grid item>
            <Button color={"secondary"} to={linkTo} component={Link}>
                {name}
            </Button>
        </Grid>
    </Grid>
);

SignFooter.propTypes = {
    linkTo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default SignFooter;