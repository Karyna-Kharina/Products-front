import { connect } from "react-redux";
import ProductForm from "../../components/productForm";
import { saveProductSaga } from "../../actions/productsSaga";
import { changeFormData } from "../../actions/form";
import { PRODUCTS_KEY } from "../../utils/constants/tableKeys";

const mapStateToProps = (state) => {
    return {
        id: state.form.products.id,
        name: state.form.products.name,
        isValidName: state.form.products.isValidName,
        price: state.form.products.price,
        isValidPrice: state.form.products.isValidPrice,
        image: state.form.products.image,
        isValidImage: state.form.products.isValidImage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeId: (id) => dispatch(changeFormData(PRODUCTS_KEY, "id", id)),
        onChangeName: (name) => dispatch(changeFormData(PRODUCTS_KEY, "name", name)),
        onChangePrice: (price) => dispatch(changeFormData(PRODUCTS_KEY, "price", price)),
        onChangeImage: (image) => dispatch(changeFormData(PRODUCTS_KEY, "image", image)),
        onSave: (product) => dispatch(saveProductSaga(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);