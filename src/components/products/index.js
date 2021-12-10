import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Container, Paper, TableContainer, Toolbar } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import SearchLine from "../SearchLine";
import ProductTable from "./ProductTable";
import { CREATE_PRODUCT_FORM } from "../../additionalData/links/front";

const Products = ({
                      products, filteredName, fetchProducts,
                      onChangeFilteredName, onCreate, onDelete, putProductToForm
                  }) => {
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <Container>
            <Toolbar/>

            <Link to={CREATE_PRODUCT_FORM}>
                <Button
                    size={"large"}
                    color={"primary"}
                    variant={"contained"}
                    startIcon={<Add/>}
                    onClick={() => onCreate()}
                >
                    Add new product
                </Button>
            </Link>

            <SearchLine
                filteredName={filteredName}
                onChangeFilteredName={onChangeFilteredName}
            />

            <Toolbar/>

            <TableContainer component={Paper}>
                <ProductTable
                    products={products}
                    onDelete={(id) => onDelete(id)}
                    putProductToForm={(product) => putProductToForm(product)}
                />
            </TableContainer>
        </Container>
    );
};

Products.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            image: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    filteredName: PropTypes.string.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    onChangeFilteredName: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    putProductToForm: PropTypes.func.isRequired
};

export default Products;