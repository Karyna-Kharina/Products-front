import { connect } from "react-redux";
import Products from "../../components/products";
import { changeFilteredName } from "../../actions/table";
import { clearProductForm, putProductToForm } from "../../actions/productForm";
import { getProductsByFilteredNameSaga, getProductsSaga, removeProduct } from "../../actions/productsSaga";
import { PRODUCTS_KEY } from "../../utils/constants/tableKeys";

const mapStateToProps = (state) => {
    return {
        products: state.table.products.list,
        filteredName: state.table.products.filteredName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(getProductsSaga()),
        putProductToForm: (product) => dispatch(putProductToForm(product)),
        onCreate: () => dispatch(clearProductForm()),
        onDelete: (id) => dispatch(removeProduct(id)),
        onChangeFilteredName: (filteredName) => {
            dispatch(changeFilteredName(PRODUCTS_KEY, filteredName));
            dispatch(getProductsByFilteredNameSaga(filteredName));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);