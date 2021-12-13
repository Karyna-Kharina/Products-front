import React, { useState } from "react";
import PropTypes from "prop-types";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { getFormattedDate } from "../../utils/methods";
import { MAX_DATE, MIN_DATE } from "../../utils/constants/dates";

const Birthday = ({ birthday, isValidBirthday, onChangeBirthday }) => {
    const [dateOpen, setDateOpen] = useState(false);

    return (
        <KeyboardDatePicker
            label={"Birthday"}
            format={"yyyy-MM-dd"}
            inputVariant={"outlined"}
            required
            fullWidth
            value={new Date(birthday)}
            minDate={MIN_DATE}
            maxDate={MAX_DATE}
            error={!isValidBirthday}
            animateYearScrolling={true}
            open={dateOpen}
            onClose={() => setDateOpen(false)}
            onClick={() => setDateOpen(!dateOpen)}
            onChange={(e) => onChangeBirthday(getFormattedDate(e))}
        />
    );
};

Birthday.propTypes = {
    birthday: PropTypes.string.isRequired,
    isValidBirthday: PropTypes.bool.isRequired,
    onChangeBirthday: PropTypes.func.isRequired
};

export default Birthday;