import { connect } from "react-redux";
import Users from "../../components/users";
import { putUserToForm } from "../../actions/userForm";
import { changeFilteredUsername } from "../../actions/users";
import { getUsersByFilteredNameSaga, getUsersSaga, removeUser } from "../../actions/usersSaga";

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        filteredName: state.users.filteredName,
        current: state.profile.current
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(getUsersSaga()),
        putUserToForm: (user) => dispatch(putUserToForm(user)),
        onDelete: (id) => dispatch(removeUser(id)),
        onChangeFilteredName: (filteredName) => {
            dispatch(changeFilteredUsername(filteredName));
            dispatch(getUsersByFilteredNameSaga());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);