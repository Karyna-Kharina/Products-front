import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { getFormattedDate } from "../../../additionalData/methods";
import { MAX_DATE, MIN_DATE } from "../../../additionalData/constants/dates";

const Birthday = ({ birthday, isValidBirthday, onChangeBirthday }) => (
    <KeyboardDatePicker
        id={"date"}
        label={"Birthday"}
        format={"yyyy-MM-dd"}
        value={new Date(birthday)}
        required
        fullWidth
        error={!isValidBirthday}
        minDate={MIN_DATE}
        maxDate={MAX_DATE}
        inputVariant={"outlined"}
        onChange={(e) => onChangeBirthday(getFormattedDate(e))}
        KeyboardButtonProps={{
            "aria-label": "change date"
        }}
    />
);

export default Birthday;