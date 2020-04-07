import {connect} from "react-redux";
import UserList from "../../components/users/UserList";
import {putUserToForm} from "../../actions/users/userFormAction";
import {changeFilteredUsername, setNumberOfPage, getUsersSaga, removeUser} from "../../actions/users/userListAction";

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        filteredName: state.users.filteredName,
        current: state.profile.current,
        page: state.users.page,
        size: state.users.size,
        totalPages: state.users.totalPages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(getUsersSaga()),
        onDeleteClick: (user) => dispatch(removeUser(user)),
        onClickPutUserToForm: (user) => dispatch(putUserToForm(user)),
        onChangeFilteredName: (filteredName) => {
            dispatch(changeFilteredUsername(filteredName));
            dispatch(getUsersSaga())
        },
        onClickPage: (page) => {
            dispatch(setNumberOfPage(page));
            dispatch(getUsersSaga())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);