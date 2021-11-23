import React, { useEffect } from "react";
import key from "weak-key";
import { Container, Grid, TextField } from "@material-ui/core";
import OneNew from "./constituents/OneNew";
import SelectCountry from "./constituents/SelectCountry";
import SelectCategory from "./constituents/SelectCategory";

const News = ({
                  newsList, country, pageSize, category,
                  fetchNews, onChooseCountry, onChangePageSize, onChooseCategory
              }) => {
    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    return (
        <Container>
            <Grid container spacing={6}>
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
                        id={"outlined-basic"}
                        label={"Enter the page size"}
                        variant={"outlined"}
                        value={pageSize}
                        type={"number"}
                        onChange={(e) => onChangePageSize(e.target.value)}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={5}>
                {
                    newsList ? newsList.map((item) => (
                        <Grid key={key(item)} item sm={12}>
                            <OneNew oneNew={item}/>
                        </Grid>
                    )) : ""
                }
            </Grid>
        </Container>
    );
};

export default News;