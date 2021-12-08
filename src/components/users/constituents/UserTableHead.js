import React from "react";
import { TableCell, TableHead, TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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

const UserTableHead = () => (
    <TableHead>
        <TableRow>
            <StyledTableCell align={"left"}>Photo</StyledTableCell>
            <StyledTableCell align={"center"}>ID</StyledTableCell>
            <StyledTableCell align={"center"}>First Name</StyledTableCell>
            <StyledTableCell align={"center"}>Last Name</StyledTableCell>
            <StyledTableCell align={"center"}>Birthday</StyledTableCell>
            <StyledTableCell align={"center"}>Phone</StyledTableCell>
            <StyledTableCell align={"center"}>Email</StyledTableCell>
            <StyledTableCell align={"center"}>Update</StyledTableCell>
            <StyledTableCell align={"center"}>Delete</StyledTableCell>
        </TableRow>
    </TableHead>
);

export default UserTableHead;