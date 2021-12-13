import { connect } from "react-redux";
import ProductCards from "../../components/products/ProductCards";
import { addProductToCart } from "../../actions/products";
import { getProductsSaga } from "../../actions/productsSaga";

const mapStateToProps = (state) => ({
    products: state.products.products
});

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(getProductsSaga()),
    onAddProduct: (product) => dispatch(addProductToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCards);