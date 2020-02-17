import React, {Component} from 'react';
import productFixtures from "../../productFixtures";
import CreateProductForm from "./CreateProductForm";
import Container from "@material-ui/core/Container";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {TableBody, TableContainer, TableRow} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import SwapVert from '@material-ui/icons/SwapVert';
import {fade, withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const styles = theme => ({
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
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
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
    }
});

const StyledTableCell = withStyles(theme => ({
    head: {
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 2,
    },
}))(TableCell);

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedProduct: {},
            filteredName: '',
            products: productFixtures
        }
    }

    onSaveClick(newItem) {

        console.log("onSaveClick()", this);

        const newList = [...this.state.products, newItem];

        this.setState({
            products: newList
        });
    }

    onDeleteClick(id) {

        console.log("onDeleteClick()", id);

        const index = this.state.products.findIndex((el) => el.id === id);

        const newList = [
            ...this.state.products.slice(0, index),
            ...this.state.products.slice(index + 1)
        ];

        this.setState({
            products: newList
        });
    }

    onUpdateClick(id) {

        console.log("onUpdateClick()", id);

        const index = this.state.products.findIndex((el) => el.id === id);

        const newList = [
            ...this.state.products.slice(0, index),
            this.state.selectedProduct,
            ...this.state.products.slice(index + 1)
        ];

        this.setState({
            products: newList
        });
    }

    onSwapClick() {

        console.log("onSwapClick()");

        const reverseList = [...this.state.products].reverse();

        this.setState({
            products: reverseList
        });
    }

    onChangeFilteredName(name) {

        console.log("onChangeFilteredName()", name);
        this.setState({filteredName: name});
    }

    render() {

        const {classes} = this.props;
        const {products, filteredName, selectedProduct} = this.state;

        return (

            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open-drawer"
                        >
                            <MenuIcon/>
                        </IconButton>

                        <Typography className={classes.title} variant="h6" noWrap>
                            ProductList
                        </Typography>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                                onChange={(e) =>
                                    this.onChangeFilteredName(e.target.value)}
                            />
                        </div>
                    </Toolbar>
                </AppBar>

                <Container>
                    <CreateProductForm
                        product={selectedProduct}
                        onCreate={(item) => this.onSaveClick(item)}
                    />

                    <Box mt={4} mb={4}>
                        <Button
                            variant="contained"
                            size="large"
                            color="inherit"
                            startIcon={<SwapVert/>}
                            onClick={() => this.onSwapClick()}
                        >
                            SWAP
                        </Button>
                    </Box>

                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">ID</StyledTableCell>
                                    <StyledTableCell align="center">Name</StyledTableCell>
                                    <StyledTableCell align="center">Price</StyledTableCell>
                                    <StyledTableCell align="center">Update</StyledTableCell>
                                    <StyledTableCell align="center">Delete</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products
                                    .filter(product => product.name.toLowerCase().includes(filteredName.toLowerCase()))
                                    .map(item => (
                                        <TableRow key={item.id}>
                                            <TableCell align="center" component="th" scope="row">
                                                {item.id}
                                            </TableCell>
                                            <TableCell align="center">{item.name}</TableCell>
                                            <TableCell align="center">{item.price}</TableCell>
                                            <TableCell align="center">
                                                <IconButton onClick={() => this.onUpdateClick(item.id)}>
                                                    <UpdateIcon/>
                                                </IconButton>
                                            </TableCell>
                                            <TableCell align="center">
                                                <IconButton onClick={() => this.onDeleteClick(item.id)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(ProductList)