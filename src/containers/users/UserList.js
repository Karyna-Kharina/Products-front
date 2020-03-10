import {connect} from "react-redux";
import UserList from "../../components/users/UserList";
import {changeFilteredUsername, removeUser} from "../../actions/users/userListAction";
import {putUserToForm} from "../../actions/users/userFormAction";

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        filteredName: state.users.filteredName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteClick: (user) => dispatch(removeUser(user)),
        onClickPutUserToForm: (user) => dispatch(putUserToForm(user)),
        onChangeFilteredUsername: (filteredName) => dispatch(changeFilteredUsername(filteredName))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);