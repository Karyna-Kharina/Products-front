import {connect} from "react-redux";
import CreateProductForm from "../components/products/CreateProductForm";
import {updateId, updateImage, updateName, updatePrice} from "../actions/formAction";
import {saveProduct} from "../actions/action";

const mapStateToProps = (state) => {
    return {
        id: state.form.product.id,
        name: state.form.product.name,
        price: state.form.product.price,
        image: state.form.product.image
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