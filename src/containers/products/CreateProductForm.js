import {connect} from "react-redux";
import CreateProductForm from "../../components/products/CreateProductForm";
import {updateId, updateImage, updateName, updatePrice} from "../../actions/products/productFormAction";
import {saveProduct} from "../../actions/products/productListAction";

const mapStateToProps = (state) => {
    return {
        id: state.productForm.product.id,
        name: state.productForm.product.name,
        price: state.productForm.product.price,
        image: state.productForm.product.image
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeId: (id) => dispatch(updateId(id)),
        onChangeName: (name) => dispatch(updateName(name)),
        onChangePrice: (price) => dispatch(updatePrice(price)),
        onChangeImage: (image) => dispatch(updateImage(image)),
        onCreate: (product) => dispatch(saveProduct(product))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateProductForm);