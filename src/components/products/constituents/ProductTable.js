import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { PRODUCT_UPDATE } from "../../../additionalData/links/front";

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
    <Table size={"small"} aria-label={"a dense table"}>
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
                products.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell align={"center"} component={"th"} scope={"row"}>
                            {product.id}
                        </TableCell>

                        <TableCell align={"center"}>{product.name}</TableCell>
                        <TableCell align={"center"}>{product.price}</TableCell>

                        <TableCell align={"center"}>
                            <Link to={PRODUCT_UPDATE}>
                                <IconButton onClick={() => putProductToForm(product)}>
                                    <Update/>
                                </IconButton>
                            </Link>
                        </TableCell>

                        <TableCell align={"center"}>
                            <IconButton onClick={() => onDelete(product.id)}>
                                <Delete/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
);

export default ProductTable;