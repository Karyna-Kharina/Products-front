import TableHead from "@material-ui/core/TableHead";
import {TableBody, TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";
import Table from "@material-ui/core/Table";
import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {PRODUCT_UPDATE} from "../../../additionalData/links/front";

const StyledTableCell = withStyles(theme => ({
    head: {
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 2,
    }
}))(TableCell);

export default ({classes, products, filteredName, onDeleteClick, onClickPutProductToForm}) => {

    return (
        <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <StyledTableCell align="center">ID</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                    <StyledTableCell align="center">Update</StyledTableCell>
                    <StyledTableCell align="center">Delete</StyledTableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {products
                    .filter(product => product.name.toLowerCase().includes(filteredName.toLowerCase()))
                    .map(item => (
                        <TableRow key={item.id}>
                            <TableCell align="center" component="th" scope="row">
                                {item.id}
                            </TableCell>

                            <TableCell align="center">{item.name}</TableCell>
                            <TableCell align="center">{item.price}</TableCell>

                            <TableCell align="center">
                                <Link to={PRODUCT_UPDATE}>
                                    <IconButton onClick={() => onClickPutProductToForm(item)}>
                                        <UpdateIcon/>
                                    </IconButton>
                                </Link>
                            </TableCell>

                            <TableCell align="center">
                                <IconButton onClick={() => onDeleteClick(item)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}