import {connect} from "react-redux";
import ProductCards from "../../components/products/ProductCards";
import {addProductToCart} from '../../actions/products/productListAction';

const mapStateToProps = (state) => ({
    products: state.products.products
});

const mapDispatchToProps = (dispatch) => ({
    onClickAddProduct: (product) => dispatch(addProductToCart(product))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductCards);