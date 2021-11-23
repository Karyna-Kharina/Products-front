import React from "react";
import TextField from "@material-ui/core/TextField";

const EmailComponent = ({ email, isValidEmail, onChangeEmail }) => (
    <TextField
        id={"email"}
        name={"email"}
        label={"Email Address"}
        autoComplete={"email"}
        value={email}
        error={!isValidEmail}
        required
        fullWidth
        variant={"outlined"}
        onChange={(e) => onChangeEmail(e.target.value)}
    />
);

export default EmailComponent;