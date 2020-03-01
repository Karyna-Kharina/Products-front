import React from "react";
import Button from "@material-ui/core/Button";
import Save from "@material-ui/icons/Save";
import Update from "@material-ui/icons/Update";
import TextField from "@material-ui/core/TextField";
import {Box} from "@material-ui/core";

export default ({id, name, price, onChangeId, onChangeName, onChangePrice, onCreate}) => {

    return (
        <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            mt={4}
            mb={4}
        >
            <Box mr={4}>
                <TextField
                    id="margin-normal"
                    label="ID"
                    size="small"
                    variant="outlined"
                    type="number"
                    value={id}
                    onChange={(e) => onChangeId(e.target.value)}
                />

            </Box>

            <Box mr={4}>
                <TextField
                    id="margin-normal"
                    label="Name"
                    size="small"
                    variant="outlined"
                    type="text"
                    value={name}
                    onChange={(e) => onChangeName(e.target.value)}
                />
            </Box>

            <Box mr={4}>
                <TextField
                    id="margin-normal"
                    label="Price"
                    size="small"
                    variant="outlined"
                    type="number"
                    value={price}
                    onChange={(e) => onChangePrice(e.target.value)}
                />
            </Box>

            <Box mr={4}>
                <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    startIcon={id ? <Update/> : <Save/>}
                    onClick={() => onCreate()}
                >
                    {id ? "UPDATE" : "SAVE"}
                </Button>
            </Box>
        </Box>
    )
}