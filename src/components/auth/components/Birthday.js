import React from "react";
import {KeyboardDatePicker} from "@material-ui/pickers";

export default function ({date, isValidDate, onChangeDate}) {

    return (
        <KeyboardDatePicker
            id="date"
            label="Date"
            format="MM/dd/yyyy"
            value={date}
            margin="normal"
            style={{"marginLeft": 10, "marginRight": 10}}
            required
            fullWidth
            error={!isValidDate}
            onChange={onChangeDate}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
        />
    )
}