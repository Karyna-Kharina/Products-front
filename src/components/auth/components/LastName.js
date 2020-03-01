import TextField from "@material-ui/core/TextField";
import React from "react";

export default function ({lastName, lastNameValid, onChangeLastName}) {

    return (
        <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            autoComplete="lname"
            value={lastName}
            error={!lastNameValid}
            required
            fullWidth
            variant="outlined"
            onChange={onChangeLastName}
        />
    )
}