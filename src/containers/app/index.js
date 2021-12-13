import { connect } from "react-redux";
import App from "../../components/app";
import { logOut } from "../../actions/profile";

const mapStateToProps = (state) => ({
    countProductsInCart: state.products.productsInCart.length,
    photo: state.profile.current.photo
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: () => dispatch(logOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);