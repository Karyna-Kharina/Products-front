import React, {useEffect} from "react";
import key from 'weak-key';
import OneNew from "./components/OneNew";
import {Container, Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SelectCountry from "./components/SelectCountry";
import TextField from "@material-ui/core/TextField";
import SelectCategory from "./components/SelectCategory";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    inputForm: {
        width: 300
    }
}));

export default ({
                    newsList, country, pageSize, category,
                    fetchNews, onChooseCountry, onChangePageSize, onChooseCategory
                }) => {

    const classes = useStyles();

    useEffect(() => {
        fetchNews()
    }, []);

    return (
        <Container>
            <Grid container className={classes.root} spacing={6}>
                <Grid item xs={12} sm={3}>
                    <SelectCountry
                        country={country}
                        onChooseCountry={(country) => onChooseCountry(country)}
                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <SelectCategory
                        category={category}
                        onChooseCategory={(category) => onChooseCategory(category)}
                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <TextField
                        id="outlined-basic"
                        label="Enter the page size"
                        variant="outlined"
                        value={pageSize}
                        type="number"
                        className={classes.inputForm}
                        onChange={(e) => onChangePageSize(e.target.value)}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={5}>
                {
                    newsList ?
                        newsList
                            .map(item => (
                                <Grid key={key(item)} item sm={12}>
                                    <OneNew
                                        oneNew={item}
                                    />
                                </Grid>
                            ))
                        :
                        ''
                }
            </Grid>
        </Container>
    )
}