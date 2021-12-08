import { connect } from "react-redux";
import { logIn } from "../../actions/authSaga/signIn";
import SignIn from "../../components/auth/SignIn";
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
        onLogIn: () => dispatch(logIn())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

