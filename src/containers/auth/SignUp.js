import {
    changeCheckbox,
    changeDate,
    changeEmail,
    changeFirstName,
    changeLastName,
    changePassword,
    changePhone,
    signUp
} from "../../actions/auth/signUpAction";
import {connect} from "react-redux";
import SignUp from "../../components/auth/SignUp";

export const mapStateToProps = (state) => {
    return {
        firstName: state.signUp.firstName,
        isValidFirstName: state.signUp.isValidFirstName,
        lastName: state.signUp.lastName,
        isValidLastName: state.signUp.isValidLastName,
        email: state.signUp.email,
        isValidEmail: state.signUp.isValidEmail,
        phoneNumber: state.signUp.phoneNumber,
        isValidPhoneNumber: state.signUp.isValidPhoneNumber,
        password: state.signUp.password,
        isValidPassword: state.signUp.isValidPassword,
        selectedDate: state.signUp.selectedDate,
        isCheckedBox: state.signUp.isCheckedBox
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFirstName: (firstName) => dispatch(changeFirstName(firstName)),
        onChangeLastName: (lastName) => dispatch(changeLastName(lastName)),
        onChangeEmail: (email) => dispatch(changeEmail(email)),
        onChangePhone: (phone) => dispatch(changePhone(phone)),
        onChangePassword: (password) => dispatch(changePassword(password)),
        onChangeDate: (date) => dispatch(changeDate(date)),
        onChangeCheckbox: (checkbox) => dispatch(changeCheckbox(checkbox)),
        onSignUp: () => dispatch(signUp())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

