import { connect } from "react-redux";
import Products from "../../components/products";
import { putProductToForm } from "../../actions/productForm";
import { changeFilteredName, swapProducts } from "../../actions/products";
import { getProductsByFilteredNameSaga, getProductsSaga, removeProduct } from "../../actions/productsSaga";

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        filteredName: state.products.filteredName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSwapClick: () => dispatch(swapProducts()),
        fetchProducts: () => dispatch(getProductsSaga()),
        onDeleteClick: (product) => dispatch(removeProduct(product)),
        onClickPutProductToForm: (product) => dispatch(putProductToForm(product)),
        onChangeFilteredName: (filteredName) => {
            dispatch(changeFilteredName(filteredName));
            dispatch(getProductsByFilteredNameSaga(filteredName));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);