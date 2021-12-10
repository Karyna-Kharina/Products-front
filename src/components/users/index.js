import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Paper, TableContainer, Toolbar } from "@material-ui/core";
import SearchLine from "../SearchLine";
import UserTable from "./UserTable";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    div: {
        contain: "content"
    }
});

const Users = ({ current, users, filteredName, fetchUsers, putUserToForm, onDelete, onChangeFilteredName }) => {
    const classes = useStyles();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <Container>
            <Toolbar/>

            <div className={classes.div}>
                <SearchLine
                    filteredName={filteredName}
                    onChangeFilteredName={onChangeFilteredName}
                />
            </div>

            <Toolbar/>

            <TableContainer component={Paper}>
                <UserTable
                    users={users}
                    current={current}
                    onDelete={(id) => onDelete(id)}
                    putUserToForm={(user) => putUserToForm(user)}
                />
            </TableContainer>
        </Container>
    );
};

Users.propTypes = {
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
    filteredName: PropTypes.string.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    putUserToForm: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeFilteredName: PropTypes.func.isRequired
};

export default Users;