import React from "react";
import PropTypes from "prop-types";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        width: 400,
        height: 42.25,
        float: "right"
    },
    searchIcon: {
        width: theme.spacing(7),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1.5, 1, 1, 7),
        transition: theme.transitions.create("width"),
        width: 340
    }
}));

const SearchLine = ({ filteredName, onChangeFilteredName }) => {
    const classes = useStyles();

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <Search/>
            </div>
            <InputBase
                placeholder={"Search…"}
                value={filteredName}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                }}
                onChange={(e) => onChangeFilteredName(e.target.value)}
            />
        </div>
    );
};

SearchLine.propTypes = {
    filteredName: PropTypes.string.isRequired,
    onChangeFilteredName: PropTypes.func.isRequired
};

export default SearchLine;