import React from "react";
import key from "weak-key";
import PropTypes from "prop-types";
import { Box, Container, Table, TableBody, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductCartItem from "./ProductCartItem";
import { getFloatingPointAmount } from "../../utils/methods";

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    cell: {
        width: "50px"
    }
});

const ProductCart = ({ products, onAddProduct, onRemoveProduct }) => {
    const classes = useStyles();
    let totalSum = products.reduce((a, { price }) => a + parseFloat(price), 0);

    return (
        <Container maxWidth={"lg"} style={{ marginTop: 100 }}>
            <Table className={classes.table}>
                <TableBody>
                    {
                        products
                            .filter((item, index, arr) => arr.indexOf(item) === index)
                            .map((item) => (
                                    <ProductCartItem
                                        key={key(item)}
                                        style={classes.cell}
                                        product={item}
                                        products={products}
                                        onAddProduct={onAddProduct}
                                        onRemoveProduct={onRemoveProduct}
                                    />
                                )
                            )
                    }
                </TableBody>
            </Table>

            <Box display={"flex"} mt={6} flexDirection={"row-reverse"}>
                <Typography variant={"h4"}>
                    Total sum: {getFloatingPointAmount(totalSum)}
                </Typography>
            </Box>
        </Container>
    );
};

ProductCart.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            image: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onAddProduct: PropTypes.func.isRequired,
    onRemoveProduct: PropTypes.func.isRequired
};

export default ProductCart;