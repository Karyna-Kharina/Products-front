import React from "react";
import PropTypes from "prop-types";
import { Grid, TextField } from "@material-ui/core";

const TextFieldComponent = ({ label, type = "text", value, disabled = false, isValidData, onChangeData }) => (
    <Grid item xs={12}>
        <TextField
            fullWidth
            required
            size={"medium"}
            variant={"outlined"}
            label={label}
            type={type}
            value={value}
            disabled={disabled}
            error={!isValidData}
            onChange={(e) => onChangeData(e.target.value)}
        />
    </Grid>
);

TextFieldComponent.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    isValidData: PropTypes.bool.isRequired,
    onChangeData: PropTypes.func.isRequired
};

export default TextFieldComponent;