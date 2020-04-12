import React, {useEffect} from "react";
import Container from "@material-ui/core/Container";
import {Search, SwapVert} from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import ProductTable from "./components/ProductTable";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fade} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
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
        width: '50%',
        [theme.breakpoints.up('md')]: {
            width: 500,
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
}));

export default ({
                    products, filteredName, fetchProducts,
                    onSwapClick, onDeleteClick, onClickPutProductToForm, onChangeFilteredName
                }) => {

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts]);

    const classes = useStyles();

    return (
        <Container style={{marginTop: 5}}>
            <Grid container style={{padding: 15}}>
                <Grid item xs={12} sm={7}>
                    <Button
                        variant="contained"
                        size="large"
                        color="default"
                        startIcon={<SwapVert/>}
                        onClick={() => onSwapClick()}
                    >
                        SWAP
                    </Button>
                </Grid>

                <Grid item xs={12} sm={5}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search/>
                        </div>
                        <InputBase
                            placeholder="Search by name…"
                            value={filteredName}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                            onChange={(e) => onChangeFilteredName(e.target.value)}
                        />
                    </div>
                </Grid>
            </Grid>

            <TableContainer component={Paper}>
                <ProductTable
                    classes={classes}
                    products={products}
                    onDeleteClick={(product) => onDeleteClick(product)}
                    onClickPutProductToForm={(product) => onClickPutProductToForm(product)}
                />
            </TableContainer>
        </Container>
    )
}