import { connect } from "react-redux";
import UserForm from "../../components/userForm";
import { saveUser } from "../../actions/usersSaga";
import {
    changeBirthday,
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
        id: state.userForm.id,
        firstName: state.userForm.firstName,
        isValidFirstName: state.userForm.isValidFirstName,
        lastName: state.userForm.lastName,
        isValidLastName: state.userForm.isValidLastName,
        birthday: state.userForm.birthday,
        isValidBirthday: state.userForm.isValidBirthday,
        email: state.userForm.email,
        isValidEmail: state.userForm.isValidEmail,
        phoneNumber: state.userForm.phoneNumber,
        isValidPhoneNumber: state.userForm.isValidPhoneNumber,
        photo: state.userForm.photo,
        isValidPhoto: state.userForm.isValidPhoto,
        password: state.userForm.password,
        isValidPassword: state.userForm.isValidPassword
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeId: (id) => dispatch(changeId(id)),
        onChangeFirstName: (firstName) => dispatch(changeFirstName(firstName)),
        onChangeLastName: (lastName) => dispatch(changeLastName(lastName)),
        onChangeBirthday: (birthday) => dispatch(changeBirthday(birthday)),
        onChangePhoneNumber: (phoneNumber) => dispatch(changePhoneNumber(phoneNumber)),
        onChangeEmail: (email) => dispatch(changeEmail(email)),
        onChangePhoto: (photo) => dispatch(changePhoto(photo)),
        onChangePassword: (password) => dispatch(changePassword(password)),
        onSave: (user) => dispatch(saveUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);