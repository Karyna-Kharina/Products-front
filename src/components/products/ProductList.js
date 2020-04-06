import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import {TableContainer} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SwapVert from '@material-ui/icons/SwapVert';
import {fade, makeStyles} from '@material-ui/core/styles';
import ProductTable from "./components/ProductTable";
import {Search} from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";

export const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '80%',
        [theme.breakpoints.up('md')]: {
            width: 980,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    table: {
        minWidth: 650,
    },
}));

export default ({
                    products, filteredName, onSwapClick, onDeleteClick, onClickPutProductToForm,
                    onChangeFilteredName, fetchProducts
                }) => {

    const classes = useStyles();

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts]);

    return (

        <div className={classes.grow}>
            <Container>
                <Box mt={4}>
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
                            onChange={(e) => onChangeFilteredName(e.target.value)}
                        />
                    </div>
                </Box>

                <Box p={3}>
                    <Button
                        variant="contained"
                        size="large"
                        color="inherit"
                        startIcon={<SwapVert/>}
                        onClick={() => onSwapClick()}
                    >
                        SWAP
                    </Button>
                </Box>

                <TableContainer component={Paper}>
                    <ProductTable
                        classes={classes}
                        products={products}
                        filteredName={filteredName}
                        onDeleteClick={(product) => onDeleteClick(product)}
                        onClickPutProductToForm={(product) => onClickPutProductToForm(product)}
                    />
                </TableContainer>
            </Container>
        </div>
    )
}