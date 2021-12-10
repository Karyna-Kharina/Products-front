import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { getFloatingPointAmount } from "../../additionalData/methods";
import { PRODUCT_UPDATE } from "../../additionalData/links/front";

const StyledTableCell = withStyles((theme) => ({
    head: {
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 2
    }
}))(TableCell);

const ProductTable = ({ products, onDelete, putProductToForm }) => (
    <Table size={"small"}>
        <TableHead>
            <TableRow>
                <StyledTableCell align={"center"}>ID</StyledTableCell>
                <StyledTableCell align={"center"}>Name</StyledTableCell>
                <StyledTableCell align={"center"}>Price</StyledTableCell>
                <StyledTableCell align={"center"}>Update</StyledTableCell>
                <StyledTableCell align={"center"}>Delete</StyledTableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            {
                products.map(({ id, name, price, image }) => (
                    <TableRow key={id}>
                        <TableCell align={"center"} component={"th"} scope={"row"}>
                            {id}
                        </TableCell>

                        <TableCell align={"center"}>{name}</TableCell>
                        <TableCell align={"center"}>{getFloatingPointAmount(price)}</TableCell>

                        <TableCell align={"center"}>
                            <Link to={PRODUCT_UPDATE}>
                                <IconButton onClick={() => putProductToForm({ id, name, price, image })}>
                                    <Update/>
                                </IconButton>
                            </Link>
                        </TableCell>

                        <TableCell align={"center"}>
                            <IconButton onClick={() => onDelete(id)}>
                                <Delete/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
);

ProductTable.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            image: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    putProductToForm: PropTypes.func.isRequired
};

export default ProductTable;