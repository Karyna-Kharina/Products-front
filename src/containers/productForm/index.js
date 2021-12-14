import { connect } from "react-redux";
import ProductForm from "../../components/productForm";
import { saveProduct } from "../../actions/productsSaga";
import { updateId, updateImage, updateName, updatePrice } from "../../actions/productForm";

const mapStateToProps = (state) => {
    return {
        id: state.productForm.id,
        name: state.productForm.name,
        isValidName: state.productForm.isValidName,
        price: state.productForm.price,
        isValidPrice: state.productForm.isValidPrice,
        image: state.productForm.image,
        isValidImage: state.productForm.isValidImage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeId: (id) => dispatch(updateId(id)),
        onChangeName: (name) => dispatch(updateName(name)),
        onChangePrice: (price) => dispatch(updatePrice(price)),
        onChangeImage: (image) => dispatch(updateImage(image)),
        onSave: (product) => dispatch(saveProduct(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);