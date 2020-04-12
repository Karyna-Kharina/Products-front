import React from "react";
import TextField from "@material-ui/core/TextField";

export default function ({phoneNumber, isValidPhoneNumber, onChangePhone}) {

    return (
        <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            autoComplete="phone"
            value={phoneNumber}
            error={!isValidPhoneNumber}
            required
            fullWidth
            variant="outlined"
            onChange={(e) => onChangePhone(e.target.value)}
        />
    )
}