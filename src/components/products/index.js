import React, { useEffect } from "react";
import { Button, Container, Grid, InputBase, Paper, TableContainer } from "@material-ui/core";
import { Search, SwapVert } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@mui/material/styles";
import ProductTable from "./constituents/ProductTable";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 5
    },
    grid: {
        padding: 15
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing(7),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create("width"),
        width: "50%",
        [theme.breakpoints.up("md")]: {
            width: 500
        }
    }
}));

const Products = ({
                      products, filteredName, fetchProducts,
                      onSwapClick, onDeleteClick, onClickPutProductToForm, onChangeFilteredName
                  }) => {
    const classes = useStyles();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <Container className={classes.root}>
            <Grid className={classes.grid}>
                <Grid item xs={12} sm={7}>
                    <Button
                        variant={"contained"}
                        size={"large"}
                        color={"default"}
                        startIcon={<SwapVert/>}
                        onClick={() => onSwapClick()}
                    >
                        SWAP
                    </Button>
                </Grid>

                <Grid item xs={12} sm={5}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search/>
                        </div>
                        <InputBase
                            placeholder={"Search by name…"}
                            value={filteredName}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            inputProps={{ "aria-label": "search" }}
                            onChange={(e) => onChangeFilteredName(e.target.value)}
                        />
                    </div>
                </Grid>
            </Grid>

            <TableContainer component={Paper}>
                <ProductTable
                    classes={classes}
                    products={products}
                    onDeleteClick={(product) => onDeleteClick(product)}
                    onClickPutProductToForm={(product) => onClickPutProductToForm(product)}
                />
            </TableContainer>
        </Container>
    );
};

export default Products;