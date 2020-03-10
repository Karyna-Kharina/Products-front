import {connect} from "react-redux";
import App from "../components/App";

const mapStateToProps = (state) => ({
    countProductsInCart: state.products.productsInCart.length
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);