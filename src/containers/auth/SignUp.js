import { connect } from "react-redux";
import SignUp from "../../components/auth/SignUp";
import { signUp } from "../../actions/authSaga/signUp";
import {
    changeBirthday,
    changeEmail,
    changeFirstName,
    changeLastName,
    changePassword,
    changePhone,
    changePhoto
} from "../../actions/auth/signUp";

export const mapStateToProps = (state) => {
    return {
        firstName: state.signUp.firstName,
        isValidFirstName: state.signUp.isValidFirstName,
        lastName: state.signUp.lastName,
        isValidLastName: state.signUp.isValidLastName,
        birthday: state.signUp.birthday,
        isValidBirthday: state.signUp.isValidBirthday,
        email: state.signUp.email,
        isValidEmail: state.signUp.isValidEmail,
        phoneNumber: state.signUp.phoneNumber,
        isValidPhoneNumber: state.signUp.isValidPhoneNumber,
        photo: state.signUp.photo,
        isValidPhoto: state.signUp.isValidPhoto,
        password: state.signUp.password,
        isValidPassword: state.signUp.isValidPassword
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFirstName: (firstName) => dispatch(changeFirstName(firstName)),
        onChangeLastName: (lastName) => dispatch(changeLastName(lastName)),
        onChangeEmail: (email) => dispatch(changeEmail(email)),
        onChangePhone: (phone) => dispatch(changePhone(phone)),
        onChangePhoto: (photo) => dispatch(changePhoto(photo)),
        onChangePassword: (password) => dispatch(changePassword(password)),
        onChangeBirthday: (birthday) => dispatch(changeBirthday(birthday)),
        onSignUp: () => dispatch(signUp())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

