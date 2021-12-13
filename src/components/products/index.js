import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Container, IconButton, Paper, TableContainer, Toolbar } from "@material-ui/core";
import { Add, Delete, Update } from "@material-ui/icons";
import SearchLine from "../SearchLine";
import UniversalTable from "../table";
import { CREATE_PRODUCT_FORM, PRODUCT_UPDATE } from "../../utils/links/front";

const Products = ({
                      products, filteredName, fetchProducts,
                      onChangeFilteredName, onCreate, onDelete, putProductToForm
                  }) => {
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const productColumns = [
        {
            label: "ID",
            field: "id"
        },
        {
            label: "Name",
            field: "name"
        },
        {
            label: "Price",
            field: "price"
        },
        {
            label: "Update",
            render: (product) => (
                <Link to={PRODUCT_UPDATE}>
                    <IconButton onClick={() => putProductToForm(product)}>
                        <Update/>
                    </IconButton>
                </Link>
            )
        },
        {
            label: "Delete",
            render: ({ id }) => (
                <IconButton onClick={() => onDelete(id)}>
                    <Delete/>
                </IconButton>
            )
        }
    ];

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
                <UniversalTable columns={productColumns} data={products}/>
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