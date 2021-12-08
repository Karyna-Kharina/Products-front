import React from "react";
import { Table, TableBody } from "@material-ui/core";
import UserTableHead from "./UserTableHead";
import UserTableRow from "./UserTableRow";

const UserTable = ({ classes, users, current, onDelete, putUserToForm }) => (
    <Table className={classes.table} size={"small"} aria-label={"a dense table"}>
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

export default UserTable;