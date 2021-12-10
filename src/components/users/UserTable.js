import React from "react";
import { Table, TableBody } from "@material-ui/core";
import UserTableHead from "./UserTableHead";
import UserTableRow from "./UserTableRow";
import PropTypes from "prop-types";

const UserTable = ({ users, current, onDelete, putUserToForm }) => (
    <Table size={"small"}>
        <UserTableHead/>

        <TableBody>
            {
                users.map((user) => (
                    <UserTableRow
                        key={user.id}
                        user={user}
                        current={current}
                        onDelete={onDelete}
                        putUserToForm={putUserToForm}
                    />
                ))
            }
        </TableBody>
    </Table>
);

UserTable.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            birthday: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phoneNumber: PropTypes.string.isRequired,
            photo: PropTypes.string.isRequired,
            password: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
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

export default UserTable;