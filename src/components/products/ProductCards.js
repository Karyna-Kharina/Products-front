import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Grid, Toolbar } from "@material-ui/core";
import ProductCard from "./ProductCard";

const ProductCards = ({ products, fetchProducts, onClickAddProduct }) => {
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <Container maxWidth={"lg"}>
            <Toolbar/>

            <Grid container spacing={8}>
                {
                    products.map((item) => (
                        <Grid key={item.id} item sm={3}>
                            <ProductCard
                                product={item}
                                onClickAddProduct={() => onClickAddProduct(item)}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

ProductCards.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            image: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    fetchProducts: PropTypes.func.isRequired,
    onClickAddProduct: PropTypes.func.isRequired
};

export default ProductCards;