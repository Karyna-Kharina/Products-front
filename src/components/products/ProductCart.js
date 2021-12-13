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
import { getCountOfItemsWithId, getFloatingPointAmount } from "../../utils/methods";

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
                            .map(({ id, name, price, image }) => (
                                    <TableRow key={id}>
                                        <TableCell className={classes.cell}>
                                            <ListItemAvatar>
                                                <Avatar src={image}/>
                                            </ListItemAvatar>
                                        </TableCell>

                                        <TableCell align={"left"}>
                                            <ListItemText primary={name}/>
                                        </TableCell>

                                        <TableCell align={"right"}>
                                            <IconButton onClick={() => onRemoveProduct({ id, name, price, image })}>
                                                <Remove/>
                                            </IconButton>
                                        </TableCell>

                                        <TableCell align={"center"}>
                                            <ListItemText primary={getCountOfItemsWithId(products, id)}/>
                                        </TableCell>

                                        <TableCell align={"left"}>
                                            <IconButton onClick={() => onAddProduct({ id, name, price, image })}>
                                                <Add/>
                                            </IconButton>
                                        </TableCell>

                                        <TableCell className={classes.cell}>
                                            <ListItemText primary={getFloatingPointAmount(price)}/>
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
    onAddProduct: PropTypes.func.isRequired,
    onRemoveProduct: PropTypes.func.isRequired
};

export default ProductCart;