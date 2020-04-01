import {connect} from "react-redux";
import CreateProductForm from "../../components/products/CreateProductForm";
import {updateId, updateImage, updateName, updatePrice} from "../../actions/products/productFormAction";
import {saveProduct} from "../../actions/products/productListAction";

const mapStateToProps = (state) => {
    return {
        id: state.productForm.product.id,
        name: state.productForm.product.name,
        isValidName: state.productForm.product.isValidName,
        price: state.productForm.product.price,
        isValidPrice: state.productForm.product.isValidPrice,
        image: state.productForm.product.image,
        isValidImage: state.productForm.product.isValidImage
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