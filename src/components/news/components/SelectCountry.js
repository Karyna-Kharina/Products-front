import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Autocomplete} from '@material-ui/lab';
import {makeStyles} from '@material-ui/core/styles';
import {countries} from "./Countries";

function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
});

export default ({country, onChooseCountry}) => {

    const classes = useStyles();

    return (
        <Autocomplete
            id="country-select-demo"
            style={{width: 300}}
            options={countries}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            getOptionLabel={option => option.label ? option.label : ''}
            onChange={(e, v) => onChooseCountry(v ? v : '')}
            value={country}

            renderOption={option => (
                <React.Fragment>
                    <span>{countryToFlag(option.code)}</span>
                    {option.label} ({option.code}) +{option.phone}
                </React.Fragment>
            )}

            renderInput={params => (
                <TextField
                    {...params}
                    label="Choose a country"
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