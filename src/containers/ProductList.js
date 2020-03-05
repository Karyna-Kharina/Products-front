import {connect} from "react-redux";
import ProductList from "../components/products/ProductList";
import {removeProduct, swapProducts} from "../actions/action";
import {putProductToForm} from "../actions/formAction";

const mapStateToProps = (state) => {
    return {
        products: state.app.products,
        filteredName: state.app.filteredName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSwapClick: () => dispatch(swapProducts()),
        onDeleteClick: (product) => dispatch(removeProduct(product)),
        onClickPutProductToForm: (product) => dispatch(putProductToForm(product))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);