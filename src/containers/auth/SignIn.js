import {changeEmail, changePassword,} from "../../actions/auth/signInAction";
import SignIn from "../../components/auth/SignIn";
import {connect} from "react-redux";
import {logIn} from "../../actions/auth/signInAction";

const mapStateToProps = (state) => {
    return {
        email: state.signIn.email,
        password: state.signIn.password,
        isValidEmail: state.signIn.isValidEmail,
        isValidPassword: state.signIn.isValidPassword
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeEmail: (email) => dispatch(changeEmail(email)),
        onChangePassword: (password) => dispatch(changePassword(password)),
        onLogIn: () => dispatch(logIn())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);

