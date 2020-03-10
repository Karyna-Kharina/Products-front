import {connect} from "react-redux";
import CreateUserForm from "../../components/users/CreateUserForm";
import {
    changeEmail,
    changeFirstName,
    changeId,
    changeLastName,
    changePhoneNumber,
    changePhoto,
    changePassword,
    createUser
} from "../../actions/users/userFormAction";

const mapStateToProps = (state) => {
    return {
        id: state.userForm.user.id,
        firstName: state.userForm.user.firstName,
        lastName: state.userForm.user.lastName,
        phoneNumber: state.userForm.user.phoneNumber,
        email: state.userForm.user.email,
        photo: state.userForm.user.photo,
        password: state.userForm.user.password
    }
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
        onCreate: (user) => dispatch(createUser(user))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateUserForm);