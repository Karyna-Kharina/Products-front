import React, { useEffect } from "react";
import { Button, Container, InputBase, Paper, TableContainer } from "@material-ui/core";
import { Add, Search } from "@material-ui/icons";
import { alpha, makeStyles } from "@material-ui/core/styles";
import ProductTable from "./constituents/ProductTable";
import { Link } from "react-router-dom";
import { CREATE_PRODUCT_FORM } from "../../additionalData/links/front";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 5
    },
    div: {
        margin: "50px 0"
    },
    btn: {
        width: 300
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        width: 350,
        height: 42.25,
        float: "right",
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
        padding: theme.spacing(1.5, 1, 1, 7),
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
            <div className={classes.div}>
                <Link to={CREATE_PRODUCT_FORM}>
                    <Button
                        className={classes.btn}
                        size={"large"}
                        color={"primary"}
                        variant={"contained"}
                        // disabled={isDisabledButtonSave()}
                        startIcon={<Add/>}
                        // onClick={() => onSave({ id, name, price, image })}
                    >
                        Add new product
                    </Button>
                </Link>

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