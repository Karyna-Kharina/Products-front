import React from "react";
import TextField from "@material-ui/core/TextField";

const PhoneNumber = ({ phoneNumber, isValidPhoneNumber, onChangePhone }) => (
    <TextField
        id={"phoneNumber"}
        name={"phoneNumber"}
        label={"Phone Number"}
        autoComplete={"phone"}
        value={phoneNumber}
        error={!isValidPhoneNumber}
        required
        fullWidth
        variant={"outlined"}
        onChange={(e) => onChangePhone(e.target.value)}
    />
);

export default PhoneNumber;