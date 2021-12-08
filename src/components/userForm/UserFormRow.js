import React from "react";
import { Grid, TextField } from "@material-ui/core";

const UserFormRow = ({ label, type = "text", value, disabled = false, isValidData, onChangeData }) => {
    return (
        <Grid item xs={12}>
            <TextField
                fullWidth
                required
                disabled={disabled}
                id={"margin-normal"}
                label={label}
                size={"medium"}
                variant={"outlined"}
                type={type}
                value={value}
                error={!isValidData}
                onChange={(e) => onChangeData(e.target.value)}
            />
        </Grid>
    );
};

export default UserFormRow;