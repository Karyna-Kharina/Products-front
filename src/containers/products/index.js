import { connect } from "react-redux";
import Products from "../../components/products";
import { putProductToForm } from "../../actions/productForm";
import { changeFilteredName } from "../../actions/products";
import { getProductsByFilteredNameSaga, getProductsSaga, removeProduct } from "../../actions/productsSaga";

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        filteredName: state.products.filteredName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(getProductsSaga()),
        putProductToForm: (product) => dispatch(putProductToForm(product)),
        onDelete: (id) => dispatch(removeProduct(id)),
        onChangeFilteredName: (filteredName) => {
            dispatch(changeFilteredName(filteredName));
            dispatch(getProductsByFilteredNameSaga(filteredName));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);