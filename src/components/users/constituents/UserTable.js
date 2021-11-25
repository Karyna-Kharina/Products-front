import React from "react";
import { Link } from "react-router-dom";
import { Avatar, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { USER_UPDATE } from "../../../additionalData/links/front";

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

const UserTable = ({ classes, users, current, onDelete, putUserToForm }) => (
    <Table className={classes.table} size={"small"} aria-label={"a dense table"}>
        <TableHead>
            <TableRow>
                <StyledTableCell align={"left"}>Photo</StyledTableCell>
                <StyledTableCell align={"center"}>ID</StyledTableCell>
                <StyledTableCell align={"center"}>First Name</StyledTableCell>
                <StyledTableCell align={"center"}>Last Name</StyledTableCell>
                <StyledTableCell align={"center"}>Phone</StyledTableCell>
                <StyledTableCell align={"center"}>Email</StyledTableCell>
                <StyledTableCell align={"center"}>Update</StyledTableCell>
                <StyledTableCell align={"center"}>Delete</StyledTableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            {
                users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell align={"center"} component={"th"} scope={"row"}>
                            <Avatar src={user.photo}/>
                        </TableCell>

                        <TableCell align={"center"}>
                            {user.id}
                        </TableCell>

                        <TableCell align={"center"}>{user.firstName}</TableCell>
                        <TableCell align={"center"}>{user.lastName}</TableCell>
                        <TableCell align={"center"}>{user.phoneNumber}</TableCell>
                        <TableCell align={"center"}>{user.email}</TableCell>

                        <TableCell align={"center"}>
                            <Link to={USER_UPDATE}>
                                <IconButton onClick={() => putUserToForm(user)}>
                                    <Update/>
                                </IconButton>
                            </Link>
                        </TableCell>

                        <TableCell align={"center"}>
                            <IconButton
                                disabled={user.id === current.id}
                                onClick={() => onDelete(user.id)}
                            >
                                <Delete/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
);

export default UserTable;