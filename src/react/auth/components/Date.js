import {KeyboardDatePicker} from "@material-ui/pickers";
import React from "react";

export default function ({selectedDate, onChangeDate}) {

    return (
        <KeyboardDatePicker
            id="date"
            label="Date"
            format="MM/dd/yyyy"
            value={selectedDate}
            margin="normal"
            style={{"margin-left": 10, "margin-right": 10}}
            fullWidth
            onChange={onChangeDate}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
        />
    )
}