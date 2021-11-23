import { connect } from "react-redux";
import UserForm from "../../components/userForm";
import { saveUser } from "../../actions/usersSaga";
import {
    changeEmail,
    changeFirstName,
    changeId,
    changeLastName,
    changePassword,
    changePhoneNumber,
    changePhoto
} from "../../actions/userForm";

const mapStateToProps = (state) => {
    return {
        id: state.userForm.user.id,
        firstName: state.userForm.user.firstName,
        isValidFirstName: state.userForm.user.isValidFirstName,
        lastName: state.userForm.user.lastName,
        isValidLastName: state.userForm.user.isValidLastName,
        email: state.userForm.user.email,
        isValidEmail: state.userForm.user.isValidEmail,
        phoneNumber: state.userForm.user.phoneNumber,
        isValidPhoneNumber: state.userForm.user.isValidPhoneNumber,
        photo: state.userForm.user.photo,
        isValidPhoto: state.userForm.user.isValidPhoto,
        password: state.userForm.user.password,
        isValidPassword: state.userForm.user.isValidPassword
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeId: (id) => dispatch(changeId(id)),
        onChangeFirstName: (firstName) => dispatch(changeFirstName(firstName)),
        onChangeLastName: (lastName) => dispatch(changeLastName(lastName)),
        onChangePhoneNumber: (phoneNumber) => dispatch(changePhoneNumber(phoneNumber)),
        onChangeEmail: (email) => dispatch(changeEmail(email)),
        onChangePhoto: (photo) => dispatch(changePhoto(photo)),
        onChangePassword: (password) => dispatch(changePassword(password)),
        onCreate: (user) => dispatch(saveUser(user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm);