import React from "react";
import key from "weak-key";
import PropTypes from "prop-types";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
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

const UniversalTable = ({ columns, data }) => (
    <Table size={"small"}>
        <TableHead>
            <TableRow>
                {
                    columns.map(({ label }) => (
                        <StyledTableCell key={key({ label })} align={"center"}>{label}</StyledTableCell>
                    ))
                }
            </TableRow>
        </TableHead>

        <TableBody>
            {
                data.map((item) => (
                    <TableRow key={key(item)}>
                        {
                            columns.map(({ label, field, render }) => (
                                <TableCell key={key({ label })} align={"center"}>
                                    {render ? render(item) : item[field]}
                                </TableCell>
                            ))
                        }
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
);

UniversalTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default UniversalTable;