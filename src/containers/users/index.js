import { connect } from "react-redux";
import Users from "../../components/users";
import { changeFilteredUsername, clickOnPage } from "../../actions/users";
import { getUsersSaga, removeUser, saveUser } from "../../actions/usersSaga";
import {
    changeDate,
    changeEmail,
    changeFirstName,
    changeId,
    changeLastName,
    changePassword,
    changePhoneNumber,
    changePhoto,
    putUserToForm
} from "../../actions/userForm";

const mapStateToProps = (state) => {
    return {
        id: state.userForm.user.id,
        firstName: state.userForm.user.firstName,
        isValidFirstName: state.userForm.user.isValidFirstName,
        lastName: state.userForm.user.lastName,
        isValidLastName: state.userForm.user.isValidLastName,
        date: state.userForm.user.date,
        isValidDate: state.userForm.user.isValidDate,
        email: state.userForm.user.email,
        isValidEmail: state.userForm.user.isValidEmail,
        phoneNumber: state.userForm.user.phoneNumber,
        isValidPhoneNumber: state.userForm.user.isValidPhoneNumber,
        photo: state.userForm.user.photo,
        isValidPhoto: state.userForm.user.isValidPhoto,
        password: state.userForm.user.password,
        isValidPassword: state.userForm.user.isValidPassword,
        users: state.users.users,
        filteredName: state.users.filteredName,
        current: state.profile.current,
        page: state.users.page,
        size: state.users.size,
        totalPages: state.users.totalPages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(getUsersSaga()),
        onDeleteClick: (user) => dispatch(removeUser(user)),
        onClickPutUserToForm: (user) => dispatch(putUserToForm(user)),
        onChangeFilteredName: (filteredName) => {
            dispatch(changeFilteredUsername(filteredName));
            dispatch(getUsersSaga());
        },
        onClickPage: (page) => {
            dispatch(clickOnPage(page));
            dispatch(getUsersSaga());
        },
        onChangeId: (id) => dispatch(changeId(id)),
        onChangeFirstName: (firstName) => dispatch(changeFirstName(firstName)),
        onChangeLastName: (lastName) => dispatch(changeLastName(lastName)),
        onChangeDate: (date) => dispatch(changeDate(date)),
        onChangePhoneNumber: (phoneNumber) => dispatch(changePhoneNumber(phoneNumber)),
        onChangeEmail: (email) => dispatch(changeEmail(email)),
        onChangePhoto: (photo) => dispatch(changePhoto(photo)),
        onChangePassword: (password) => dispatch(changePassword(password)),
        onSave: (user) => dispatch(saveUser(user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);