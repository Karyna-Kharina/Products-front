import React from "react";
import { TextField } from "@material-ui/core";

const Password = ({ password, isValidPassword, onChangePassword }) => (
    <TextField
        id={"password"}
        name={"password"}
        label={"Password"}
        autoComplete={"password"}
        type={"password"}
        value={password}
        error={!isValidPassword}
        required
        fullWidth
        autoFocus
        variant={"outlined"}
        onChange={(e) => onChangePassword(e.target.value)}
    />
);

export default Password;