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
import {USER_UPDATE} from "../../links";

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

export default ({classes, users, filteredName, onDeleteClick, onClickPutUserToForm}) => {

    return (
        <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <StyledTableCell align="center">ID</StyledTableCell>
                    <StyledTableCell align="center">First Name</StyledTableCell>
                    <StyledTableCell align="center">Last Name</StyledTableCell>
                    <StyledTableCell align="center">Phone</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center">Update</StyledTableCell>
                    <StyledTableCell align="center">Delete</StyledTableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {users
                    .filter(user => user.firstName.toLowerCase().includes(filteredName.toLowerCase()) ||
                        user.lastName.toLowerCase().includes(filteredName.toLowerCase())
                    )
                    .map(item => (
                        <TableRow key={item.id}>
                            <TableCell align="center" component="th" scope="row">
                                {item.id}
                            </TableCell>

                            <TableCell align="center">{item.firstName}</TableCell>
                            <TableCell align="center">{item.lastName}</TableCell>
                            <TableCell align="center">{item.phoneNumber}</TableCell>
                            <TableCell align="center">{item.email}</TableCell>

                            <TableCell align="center">
                                <Link to={USER_UPDATE}>
                                    <IconButton onClick={() => onClickPutUserToForm(item)}>
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