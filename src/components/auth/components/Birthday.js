import React from "react";
import {KeyboardDatePicker} from "@material-ui/pickers";

export default function ({date, isValidDate, onChangeDate}) {

    return (
        <KeyboardDatePicker
            id="date"
            label="Birthday"
            format="yyyy-MM-dd"
            value={date}
            margin="normal"
            style={{"marginLeft": 10, "marginRight": 10}}
            required
            fullWidth
            error={!isValidDate}
            minDate="1950-01-01"
            maxDate="2010-12-31"
            inputVariant="outlined"
            onChange={onChangeDate}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
        />
    )
}