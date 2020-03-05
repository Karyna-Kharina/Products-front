import TextField from "@material-ui/core/TextField";
import React from "react";

export default function ({firstName, isValidFirstName, onChangeFirstName}) {

    return (
        <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            autoComplete="fname"
            value={firstName}
            error={!isValidFirstName}
            required
            fullWidth
            variant="outlined"
            onChange={(e) => onChangeFirstName(e.target.value)}
        />
    )
}