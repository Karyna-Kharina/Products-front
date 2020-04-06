import Container from "@material-ui/core/Container";
import {TableContainer} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React, {useEffect} from "react";
import {useStyles} from "../products/ProductList"
import UserTable from "./UserTable";
import {Search} from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";

export default ({users, filteredName, fetchUsers, onDeleteClick, onClickPutUserToForm, onChangeFilteredUsername}) => {

    const classes = useStyles();

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);

    return (

        <div className={classes.grow}>
            <Container>
                <Box mt={4} mb={4}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                            onChange={(e) => onChangeFilteredUsername(e.target.value)}
                        />
                    </div>
                </Box>

                <TableContainer component={Paper}>
                    <UserTable
                        classes={classes}
                        users={users}
                        filteredName={filteredName}
                        onDeleteClick={(user) => onDeleteClick(user)}
                        onClickPutUserToForm={(user) => onClickPutUserToForm(user)}
                    />
                </TableContainer>
            </Container>
        </div>
    )
}