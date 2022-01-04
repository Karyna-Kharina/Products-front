import { connect } from "react-redux";
import Products from "../../components/products";
import { setFormData } from "../../actions/form";
import { changeFilteredName } from "../../actions/table";
import { clearProductForm } from "../../actions/productForm";
import { getProductsByFilteredNameSaga, getProductsSaga, removeProductSaga } from "../../actions/productsSaga";
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
        putProductToForm: (product) => dispatch(setFormData(PRODUCTS_KEY, product)),
        onCreate: () => dispatch(clearProductForm()),
        onDelete: (id) => dispatch(removeProductSaga(id)),
        onChangeFilteredName: (filteredName) => {
            dispatch(changeFilteredName(PRODUCTS_KEY, filteredName));
            dispatch(getProductsByFilteredNameSaga(filteredName));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);