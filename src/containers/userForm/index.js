import { connect } from "react-redux";
import UserForm from "../../components/userForm";
import { saveUserSaga } from "../../actions/usersSaga";
import { changeFormData } from "../../actions/form";
import { USERS_KEY } from "../../utils/constants/tableKeys";

const mapStateToProps = (state) => {
    return {
        id: state.form.users.id,
        firstName: state.form.users.firstName,
        isValidFirstName: state.form.users.isValidFirstName,
        lastName: state.form.users.lastName,
        isValidLastName: state.form.users.isValidLastName,
        birthday: state.form.users.birthday,
        isValidBirthday: state.form.users.isValidBirthday,
        email: state.form.users.email,
        isValidEmail: state.form.users.isValidEmail,
        phoneNumber: state.form.users.phoneNumber,
        isValidPhoneNumber: state.form.users.isValidPhoneNumber,
        photo: state.form.users.photo,
        isValidPhoto: state.form.users.isValidPhoto,
        password: state.form.users.password,
        isValidPassword: state.form.users.isValidPassword
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeId: (id) => dispatch(changeFormData(USERS_KEY, "id", id)),
        onChangeFirstName: (firstName) => dispatch(changeFormData(USERS_KEY, "firstName", firstName)),
        onChangeLastName: (lastName) => dispatch(changeFormData(USERS_KEY, "lastName", lastName)),
        onChangeBirthday: (birthday) => dispatch(changeFormData(USERS_KEY, "birthday", birthday)),
        onChangePhoneNumber: (phoneNumber) => dispatch(changeFormData(USERS_KEY, "phoneNumber", phoneNumber)),
        onChangeEmail: (email) => dispatch(changeFormData(USERS_KEY, "email", email)),
        onChangePhoto: (photo) => dispatch(changeFormData(USERS_KEY, "photo", photo)),
        onChangePassword: (password) => dispatch(changeFormData(USERS_KEY, "password", password)),
        onSave: (user) => dispatch(saveUserSaga(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);