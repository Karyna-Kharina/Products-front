import {connect} from "react-redux";
import UserList from "../../components/users/UserList";
import {putUserToForm} from "../../actions/users/userFormAction";
import {
    changeFilteredUsername,
    getUsersByFilteredNameSaga,
    getUsersSaga,
    removeUser
} from "../../actions/users/userListAction";

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        filteredName: state.users.filteredName,
        current: state.profile.current
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(getUsersSaga()),
        onDeleteClick: (user) => dispatch(removeUser(user)),
        onClickPutUserToForm: (user) => dispatch(putUserToForm(user)),
        onChangeFilteredUsername: (filteredName) => {
            dispatch(changeFilteredUsername(filteredName));
            dispatch(getUsersByFilteredNameSaga(filteredName))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);