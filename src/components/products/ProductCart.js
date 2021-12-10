import React from "react";
import PropTypes from "prop-types";
import {
    Avatar,
    Box,
    Container,
    IconButton,
    ListItemAvatar,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { getCountOfItemsWithId, getFloatingPointAmount } from "../../additionalData/methods";

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    cell: {
        width: "50px"
    }
});

const ProductCart = ({ products, onClickAddProduct, onClickRemoveProduct }) => {
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
                                    <TableRow key={item.id}>
                                        <TableCell className={classes.cell}>
                                            <ListItemAvatar>
                                                <Avatar src={item.image}/>
                                            </ListItemAvatar>
                                        </TableCell>

                                        <TableCell align={"left"}>
                                            <ListItemText primary={item.name}/>
                                        </TableCell>

                                        <TableCell align={"right"}>
                                            <IconButton onClick={() => onClickRemoveProduct(item)}>
                                                <Remove/>
                                            </IconButton>
                                        </TableCell>

                                        <TableCell align={"center"}>
                                            <ListItemText primary={getCountOfItemsWithId(products, item.id)}/>
                                        </TableCell>

                                        <TableCell align={"left"}>
                                            <IconButton onClick={() => onClickAddProduct(item)}>
                                                <Add/>
                                            </IconButton>
                                        </TableCell>

                                        <TableCell className={classes.cell}>
                                            <ListItemText primary={item.price}/>
                                        </TableCell>
                                    </TableRow>
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
    onClickAddProduct: PropTypes.func.isRequired,
    onClickRemoveProduct: PropTypes.func.isRequired
};

export default ProductCart;