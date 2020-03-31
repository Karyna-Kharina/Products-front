import {connect} from "react-redux";
import App from "../../components/App";
import {logOut} from "../../actions/users/profile";

const mapStateToProps = (state) => ({
    countProductsInCart: state.products.productsInCart.length,
    photo: state.profile.current.photo
});

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);