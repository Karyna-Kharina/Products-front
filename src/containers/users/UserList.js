import {connect} from "react-redux";
import UserList from "../../components/users/UserList";
import {
    changeFilteredUsername,
    getUsersByFilteredNameSaga,
    getUsersSaga,
    removeUser
} from "../../actions/users/userListAction";
import {putUserToForm} from "../../actions/users/userFormAction";

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        filteredName: state.users.filteredName
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