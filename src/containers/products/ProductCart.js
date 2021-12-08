import { connect } from "react-redux";
import ProductCart from "../../components/products/ProductCart";
import { addProductToCart, removeProductFromCart } from "../../actions/products";

const mapStateToProps = (state) => ({
    products: state.products.productsInCart
});

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAddProduct: (product) => dispatch(addProductToCart(product)),
        onClickRemoveProduct: (product) => dispatch(removeProductFromCart(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);