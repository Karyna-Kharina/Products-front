import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Avatar, Container, IconButton, Paper, TableContainer, Toolbar } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import SearchLine from "../SearchLine";
import UniversalTable from "../table";
import { USER_UPDATE } from "../../utils/links/front";

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

    const userColumns = [
        {
            label: "Photo",
            field: "photo",
            render: ({ photo }) => (<Avatar src={photo}/>)
        },
        {
            label: "ID",
            field: "id"
        },
        {
            label: "First Name",
            field: "firstName"
        },
        {
            label: "Last Name",
            field: "lastName"
        },
        {
            label: "Birthday",
            field: "birthday"
        },
        {
            label: "Phone",
            field: "phoneNumber"
        },
        {
            label: "Email",
            field: "email"
        },
        {
            label: "Update",
            render: (user) => (
                <Link to={USER_UPDATE}>
                    <IconButton onClick={() => putUserToForm(user)}>
                        <Update/>
                    </IconButton>
                </Link>
            )
        },
        {
            label: "Delete",
            render: ({ id }) => (
                <IconButton
                    disabled={id === current.id}
                    onClick={() => onDelete(id)}
                >
                    <Delete/>
                </IconButton>
            )
        }
    ];

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
                <UniversalTable columns={userColumns} data={users}/>
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