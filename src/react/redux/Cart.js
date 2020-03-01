import {addProductToCart, removeProductFromCart} from './action';
import {connect} from "react-redux";
import Cart from "../products/Cart";

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