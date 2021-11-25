import React, { useEffect } from "react";
import { Container, InputBase, Paper, TableContainer } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@mui/material/styles";
import ProductTable from "./constituents/ProductTable";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 5
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        margin: "50px 0",
        width: 400,
        float: "right",
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
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
        width: 340
    }
}));

const Products = ({ products, filteredName, fetchProducts, onChangeFilteredName, onDelete, putProductToForm }) => {
    const classes = useStyles();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <Container className={classes.root}>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <Search/>
                </div>
                <InputBase
                    placeholder={"Search…"}
                    value={filteredName}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                    }}
                    inputProps={{ "aria-label": "search" }}
                    onChange={(e) => onChangeFilteredName(e.target.value)}
                />
            </div>

            <TableContainer component={Paper}>
                <ProductTable
                    classes={classes}
                    products={products}
                    onDelete={(id) => onDelete(id)}
                    putProductToForm={(product) => putProductToForm(product)}
                />
            </TableContainer>
        </Container>
    );
};

export default Products;