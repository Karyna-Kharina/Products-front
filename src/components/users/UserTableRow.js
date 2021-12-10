import React from "react";
import { Link } from "react-router-dom";
import { Avatar, IconButton, TableCell, TableRow } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import { USER_UPDATE } from "../../additionalData/links/front";
import PropTypes from "prop-types";

const UserTableRow = ({ user, current, onDelete, putUserToForm }) => {
    const { id, firstName, lastName, birthday, email, phoneNumber, photo } = user;

    return (
        <TableRow>
            <TableCell align={"center"} component={"th"} scope={"row"}>
                <Avatar src={photo}/>
            </TableCell>

            <TableCell align={"center"}>
                {id}
            </TableCell>

            <TableCell align={"center"}>{firstName}</TableCell>
            <TableCell align={"center"}>{lastName}</TableCell>
            <TableCell align={"center"}>{birthday}</TableCell>
            <TableCell align={"center"}>{phoneNumber}</TableCell>
            <TableCell align={"center"}>{email}</TableCell>

            <TableCell align={"center"}>
                <Link to={USER_UPDATE}>
                    <IconButton onClick={() => putUserToForm(user)}>
                        <Update/>
                    </IconButton>
                </Link>
            </TableCell>

            <TableCell align={"center"}>
                <IconButton
                    disabled={id === current.id}
                    onClick={() => onDelete(id)}
                >
                    <Delete/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

UserTableRow.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }).isRequired,
    current: PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    putUserToForm: PropTypes.func.isRequired
};

export default UserTableRow;