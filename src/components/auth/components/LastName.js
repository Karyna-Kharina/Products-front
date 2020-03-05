import TextField from "@material-ui/core/TextField";
import React from "react";

export default function ({lastName, isValidLastName, onChangeLastName}) {

    return (
        <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            autoComplete="lname"
            value={lastName}
            error={!isValidLastName}
            required
            fullWidth
            variant="outlined"
            onChange={(e) => onChangeLastName(e.target.value)}
        />
    )
}