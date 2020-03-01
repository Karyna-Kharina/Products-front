import {addProductToCart} from './action';
import {connect} from "react-redux";
import Cards from "../products/Cards";

const mapStateToProps = (state) => ({
    products: state.app.products
});

const mapDispatchToProps = (dispatch) => ({
    onClickAddProduct: (product) => dispatch(addProductToCart(product))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards);