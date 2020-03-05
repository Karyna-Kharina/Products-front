import {TextField} from "@material-ui/core";
import React from "react";

export default function ({password, isValidPassword, onChangePassword}) {

    return (
        <TextField
            id="password"
            name="password"
            label="Password"
            autoComplete="password"
            value={password}
            error={!isValidPassword}
            required
            fullWidth
            autoFocus
            variant="outlined"
            onChange={(e) => onChangePassword(e.target.value)}
        />
    )
}