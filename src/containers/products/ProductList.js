import {connect} from "react-redux";
import ProductList from "../../components/products/ProductList";
import {putProductToForm} from "../../actions/products/productFormAction";
import {
    changeFilteredName,
    getProductsByFilteredNameSaga,
    getProductsSaga,
    removeProduct,
    swapProducts
} from "../../actions/products/productListAction";

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        filteredName: state.products.filteredName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSwapClick: () => dispatch(swapProducts()),
        fetchProducts: () => dispatch(getProductsSaga()),
        onDeleteClick: (product) => dispatch(removeProduct(product)),
        onClickPutProductToForm: (product) => dispatch(putProductToForm(product)),
        onChangeFilteredName: (filteredName) => {
            dispatch(changeFilteredName(filteredName));
            dispatch(getProductsByFilteredNameSaga(filteredName))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);