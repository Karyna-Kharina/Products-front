import TextField from "@material-ui/core/TextField";
import React from "react";

export default function ({firstName, firstNameValid, onChangeFirstName}) {

    return (
        <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            autoComplete="fname"
            value={firstName}
            error={!firstNameValid}
            required
            fullWidth
            variant="outlined"
            onChange={onChangeFirstName}
        />
    )
}