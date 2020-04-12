import React from "react";
import TextField from "@material-ui/core/TextField";

export default function ({photo, isValidPhoto, onChangePhoto}) {

    return (
        <TextField
            id="photo"
            name="photo"
            label="URL Photo"
            autoComplete="photo"
            value={photo}
            error={!isValidPhoto}
            required
            fullWidth
            variant="outlined"
            onChange={(e) => onChangePhoto(e.target.value)}
        />
    )
}