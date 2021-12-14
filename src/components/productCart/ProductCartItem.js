import React from "react";
import PropTypes from "prop-types";
import { Avatar, IconButton, ListItemAvatar, ListItemText, TableCell, TableRow } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { getCountOfItemsWithId, getFloatingPointAmount } from "../../utils/methods";

const ProductCartItem = ({ style, product, products, onAddProduct, onRemoveProduct }) => {
    const { id, name, image, price } = product;

    return (
        <TableRow key={id}>
            <TableCell className={style}>
                <ListItemAvatar>
                    <Avatar src={image}/>
                </ListItemAvatar>
            </TableCell>

            <TableCell align={"left"}>
                <ListItemText primary={name}/>
            </TableCell>

            <TableCell align={"right"}>
                <IconButton onClick={() => onRemoveProduct(product)}>
                    <Remove/>
                </IconButton>
            </TableCell>

            <TableCell align={"center"}>
                <ListItemText primary={getCountOfItemsWithId(products, id)}/>
            </TableCell>

            <TableCell align={"left"}>
                <IconButton onClick={() => onAddProduct(product)}>
                    <Add/>
                </IconButton>
            </TableCell>

            <TableCell className={style}>
                <ListItemText primary={getFloatingPointAmount(price)}/>
            </TableCell>
        </TableRow>
    );
};

ProductCartItem.propTypes = {
    style: PropTypes.string.isRequired,
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        image: PropTypes.string.isRequired
    }).isRequired,
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

export default ProductCartItem;