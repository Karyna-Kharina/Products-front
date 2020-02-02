import React, {useState} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import {Delete} from "@material-ui/icons";
import ReactResource from 'react-resource';
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import Container from "@material-ui/core/Container";

const endpoint = "http://localhost:9000";
const productApi = new ReactResource(`${endpoint}/api/products/{:id}`, {id: ':id'});


function Product({product, onRemove}) {
    console.log(product);
    return (
        <div key={product.id}>
            {product.id} :
            <TextField label="Standard" />
            <Button color="primary" onClick={() => onRemove(product)}>
                delete
            </Button>
        </div>
    )
}

function App() {

    const [products, setProducts] = useState([]);

    const findProduct = async () => {
        setProducts(await productApi.get({}));
    };
    const clearProduct = () => {
        setProducts([]);
    };

    const createProduct = () => {
        productApi.create({
            name: Math.random().toString(16).slice(2)
        })
    };

    const remove = (product) => {
        productApi.delete({id: product.id});
        setTimeout(findProduct, 100)
    };

    return (
        <Container fixed>
            <Fab color="primary" aria-label="add" onClick={findProduct}>
                <AddIcon/>
            </Fab>
            <Fab color="secondary" aria-label="edit" onClick={clearProduct}>
                <Delete/>
            </Fab>
            <Fab variant="extended" onClick={createProduct}>
                <NavigationIcon/>
                Create random product
            </Fab>
            <Fab disabled aria-label="like">
                <FavoriteIcon/>
            </Fab>
            {products.map(i => new Product({product: i, onRemove: remove}))}
        </Container>
    );
}

export default App;
