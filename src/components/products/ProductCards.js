import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import ProductCard from "./constituents/ProductCard";

const ProductCards = ({ products, fetchProducts, onClickAddProduct }) => {
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <div>
            <Container component={"main"} maxWidth={"lg"} style={{ marginTop: 25 }}>
                <Grid container spacing={2}>
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
        </div>
    );
};

export default ProductCards;