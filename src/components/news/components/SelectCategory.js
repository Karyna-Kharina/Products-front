import React from 'react';
import {categories} from "./Categories";
import TextField from "@material-ui/core/TextField";
import {Autocomplete} from "@material-ui/lab";

export default ({category, onChooseCategory}) => {

    return (
        <Autocomplete
            id="category-select-demo"
            style={{width: 300}}
            options={categories}
            autoHighlight
            getOptionLabel={option => option.label ? option.label : ''}
            onChange={(e, v) => onChooseCategory(v ? v : '')}
            value={category}

            renderOption={option => (
                <React.Fragment>
                    {option.label}
                </React.Fragment>
            )}

            renderInput={params => (
                <TextField
                    {...params}
                    label="Choose a category"
                    variant="outlined"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'off',
                    }}
                />
            )}
        />
    );
}