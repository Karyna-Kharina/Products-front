import React from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import { Categories } from "./Categories";

const SelectCategory = ({ categories, category, onChooseCategory }) => (
    <Autocomplete
        id={"category-select-demo"}
        options={categories}
        autoHighlight
        getOptionLabel={(option) => option.label ? option.label : ""}
        onChange={(e, v) => onChooseCategory(v ? v : "")}
        value={category}
        renderOption={(option) => (<React.Fragment>{option.label}</React.Fragment>)}
        renderInput={(params) => (
            <TextField
                {...params}
                label={"Choose a category"}
                variant={"outlined"}
                inputProps={{
                    ...params.inputProps,
                    autoComplete: "off"
                }}
            />
        )}
    />
);

SelectCategory.defaultProps = {
    categories: Categories
};

export default SelectCategory;