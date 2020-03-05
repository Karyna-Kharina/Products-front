import TextField from "@material-ui/core/TextField";
import React from "react";

export default ({email, isValidEmail, onChangeEmail}) => {

    return (
        <TextField
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            value={email}
            error={!isValidEmail}
            required
            fullWidth
            variant="outlined"
            onChange={(e) => onChangeEmail(e.target.value)}
        />
    )
}