import React from "react";
import TextField from "@material-ui/core/TextField";

const PhotoUrl = ({ photo, isValidPhoto, onChangePhoto }) => (
    <TextField
        id={"photo"}
        name={"photo"}
        label={"URL Photo"}
        autoComplete={"photo"}
        value={photo}
        error={!isValidPhoto}
        required
        fullWidth
        variant={"outlined"}
        onChange={(e) => onChangePhoto(e.target.value)}
    />
);

export default PhotoUrl;