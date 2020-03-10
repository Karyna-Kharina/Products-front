import {connect} from "react-redux";
import ProductList from "../../components/products/ProductList";
import {changeFilteredName, removeProduct, swapProducts} from "../../actions/products/productListAction";
import {putProductToForm} from "../../actions/products/productFormAction";

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        filteredName: state.products.filteredName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSwapClick: () => dispatch(swapProducts()),
        onDeleteClick: (product) => dispatch(removeProduct(product)),
        onClickPutProductToForm: (product) => dispatch(putProductToForm(product)),
        onChangeFilteredName: (filteredName) => dispatch(changeFilteredName(filteredName))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);