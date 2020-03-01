import {addProductToCart, removeProductFromCart} from '../actions/action';
import {connect} from "react-redux";
import Cart from "../components/products/Cart";

const mapStateToProps = (state) => ({
    products: state.app.productsInCart
});

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAddProduct: (product) => dispatch(addProductToCart(product)),
        onClickRemoveProduct: (product) => dispatch(removeProductFromCart(product))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);