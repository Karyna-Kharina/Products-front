import { connect } from "react-redux";
import { logIn } from "../../actions/authSaga/signIn";
import SignIn from "../../components/auth/SignIn";
import { changeEmail, changePassword } from "../../actions/auth/signIn";

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
        onChangeEmail: (email) => dispatch(changeEmail(email)),
        onChangePassword: (password) => dispatch(changePassword(password)),
        onLogIn: () => dispatch(logIn())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);

