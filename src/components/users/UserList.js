import React, {useEffect} from 'react';
import MaterialTable from 'material-table';
import * as axios from "axios";
import {USERS_API} from "../../additionalData/links/back";
import {columns} from "./components/Columns";
import Container from "@material-ui/core/Container";

export default ({filteredName, current, users, fetchUsers, onChangeFilteredName}) => {

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);

    return (
        <Container style={{marginTop: 25}}>
            <MaterialTable
                title="Users"
                columns={columns}

                data={query =>
                    new Promise((resolve, reject) => {
                        axios.get(USERS_API,
                            {
                                params: {
                                    page: query.page,
                                    size: query.pageSize,
                                    filteredName: query.search
                                }
                            }
                        ).then(result => {
                            resolve({
                                data: result.data.content,
                                page: result.data.pageable.pageNumber,
                                totalCount: result.data.totalElements,
                            })
                        }).catch(reject)
                    })
                }

                options={{
                    search: true,
                    draggable: false,
                    actionsColumnIndex: 7,
                    addRowPosition: "first",
                    paginationType: "stepped",
                    pageSize: 10,
                    headerStyle: {
                        backgroundColor: '#101010',
                        fontWeight: 'bold',
                    },

                }}

                editable={{
                    isDeletable: rowData => rowData.id !== current.id,
                    onRowAdd: (user) => axios.post(USERS_API, user),
                    onRowUpdate: (user) => axios.post(USERS_API, user),
                    onRowDelete: (user) => axios.delete(USERS_API + "/" + user.id),
                }}
            />
        </Container>
    );
}