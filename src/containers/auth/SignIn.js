import { connect } from "react-redux";
import SignIn from "../../components/auth/SignIn";
import { signIn } from "../../actions/authSaga/signIn";
import { changeEmailAtLogin, changePasswordAtLogin } from "../../actions/auth/signIn";

const mapStateToProps = (state) => {
    return {
        email: state.signIn.email,
        password: state.signIn.password,
        isValidEmail: state.signIn.isValidEmail,
        isValidPassword: state.signIn.isValidPassword
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeEmail: (email) => dispatch(changeEmailAtLogin(email)),
        onChangePassword: (password) => dispatch(changePasswordAtLogin(password)),
        onSignIn: () => dispatch(signIn())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

