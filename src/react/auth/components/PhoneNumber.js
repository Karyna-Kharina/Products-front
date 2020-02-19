import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import React from "react";

export default function ({phoneNumber, phoneNumberValid, onChangePhone}) {

    return (
        <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            autoComplete="phone"
            value={phoneNumber}
            error={!phoneNumberValid}
            required
            fullWidth
            variant="outlined"
            onChange={onChangePhone}
        />
    )
}