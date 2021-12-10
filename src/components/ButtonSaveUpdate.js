import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { Save, Update } from "@material-ui/icons";

const ButtonSaveUpdate = ({ id, linkTo, isDisabledButtonSave, onSave }) => (
    <Grid item xs={12}>
        <Link to={linkTo}>
            <Button
                fullWidth
                size={"large"}
                color={"primary"}
                variant={"contained"}
                disabled={isDisabledButtonSave()}
                startIcon={id ? <Update/> : <Save/>}
                onClick={onSave}
            >
                {id ? "UPDATE" : "SAVE"}
            </Button>
        </Link>
    </Grid>
);

ButtonSaveUpdate.propTypes = {
    id: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    isDisabledButtonSave: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default ButtonSaveUpdate;