import React from "react";
import TextField from "@material-ui/core/TextField";

const FirstName = ({ firstName, isValidFirstName, onChangeFirstName }) => (
    <TextField
        id={"firstName"}
        name={"firstName"}
        label={"First Name"}
        autoComplete={"fname"}
        value={firstName}
        error={!isValidFirstName}
        required
        fullWidth
        variant={"outlined"}
        onChange={(e) => onChangeFirstName(e.target.value)}
    />
);

export default FirstName;