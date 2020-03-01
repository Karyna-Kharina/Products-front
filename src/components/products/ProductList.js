import React, {Component} from 'react';
import productFixtures from "../../productFixtures";
import CreateProductForm from "./CreateProductForm";
import Container from "@material-ui/core/Container";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {TableContainer} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SwapVert from '@material-ui/icons/SwapVert';
import {fade, withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ProductTable from "./components/ProductTable";

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

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            price: '',
            filteredName: '',
            products: productFixtures
        }
    }

    onChangeId(id) {

        console.log("onChangeId()", id);
        this.setState({id: id});
    }

    onChangeName(name) {

        console.log("onChangeName()", name);
        this.setState({name: name});
    }

    onChangePrice(price) {

        console.log("onChangePrice()", price);
        this.setState({price: price});
    }

    onSaveClick() {

        console.log("onSaveClick()", this);

        const {id, name, price} = this.state;
        const index = this.state.products.findIndex((el) => el.id === id);
        const newItem = {id, name, price};

        let newList = [];

        if (index === -1) {
            newList = [...this.state.products, newItem];
        } else {
            newList = [
                ...this.state.products.slice(0, index),
                newItem,
                ...this.state.products.slice(index + 1)
            ];
        }

        this.setState({
            products: newList,
            id: '',
            name: '',
            price: ''
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

        const selectedItem = this.state.products.find((el) => el.id === id);
        const {name, price} = selectedItem;

        this.setState({
            id: id,
            name: name,
            price: price
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
        const {id, name, price, products, filteredName} = this.state;

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
                        onCreate={() => this.onSaveClick()}
                        id={id}
                        name={name}
                        price={price}
                        onChangeId={(e) => this.onChangeId(e)}
                        onChangeName={(e) => this.onChangeName(e)}
                        onChangePrice={(e) => this.onChangePrice(e)}
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
                        <ProductTable
                            classes={classes}
                            products={products}
                            filteredName={filteredName}
                            onUpdateClick={(id) => this.onUpdateClick(id)}
                            onDeleteClick={(id) => this.onDeleteClick(id)}
                        />
                    </TableContainer>
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(ProductList)