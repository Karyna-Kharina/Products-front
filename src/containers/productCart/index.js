import { connect } from "react-redux";
import ProductCart from "../../components/productCart";
import { addProductToCart, removeProductFromCart } from "../../actions/productCart";

const mapStateToProps = (state) => {
    return {
        products: state.productCart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddProduct: (product) => dispatch(addProductToCart(product)),
        onRemoveProduct: (product) => dispatch(removeProductFromCart(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);