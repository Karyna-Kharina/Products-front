import TextField from "@material-ui/core/TextField";
import React from "react";

export default ({email, emailValid, onChangeEmail}) => {

    return (
        <TextField
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            value={email}
            error={!emailValid}
            required
            fullWidth
            variant="outlined"
            onChange={onChangeEmail}
        />
    )
}