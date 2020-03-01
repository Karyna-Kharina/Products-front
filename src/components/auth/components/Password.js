import {TextField} from "@material-ui/core";
import React from "react";

export default function ({password, passwordValid, onChangePassword}) {

    return (
        <TextField
            id="password"
            name="password"
            label="Password"
            autoComplete="password"
            value={password}
            error={!passwordValid}
            required
            fullWidth
            autoFocus
            variant="outlined"
            onChange={onChangePassword}
        />
    )
}