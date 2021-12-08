import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { Save, Update } from "@material-ui/icons";

const FullWidthButtonSave = ({ id, data, linkTo, isDisabledButtonSave, onSave }) => (
    <Grid item xs={12}>
        <Link to={linkTo}>
            <Button
                fullWidth
                size={"large"}
                color={"primary"}
                variant={"contained"}
                disabled={isDisabledButtonSave()}
                startIcon={id ? <Update/> : <Save/>}
                onClick={() => onSave(data)}
            >
                {id ? "UPDATE" : "SAVE"}
            </Button>
        </Link>
    </Grid>
);

export default FullWidthButtonSave;