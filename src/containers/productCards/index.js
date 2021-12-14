import { connect } from "react-redux";
import ProductCards from "../../components/productCards";
import { addProductToCart } from "../../actions/productCart";
import { getProductsSaga } from "../../actions/productsSaga";

const mapStateToProps = (state) => {
    return {
        products: state.products.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(getProductsSaga()),
        onAddProduct: (product) => dispatch(addProductToCart(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCards);