import React from "react";
import TextField from "@material-ui/core/TextField";

const LastName = ({ lastName, isValidLastName, onChangeLastName }) => (
    <TextField
        id={"lastName"}
        name={"lastName"}
        label={"Last Name"}
        autoComplete={"lname"}
        value={lastName}
        error={!isValidLastName}
        required
        fullWidth
        variant={"outlined"}
        onChange={(e) => onChangeLastName(e.target.value)}
    />
);

export default LastName;