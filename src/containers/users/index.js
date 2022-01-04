import { connect } from "react-redux";
import Users from "../../components/users";
import { setFormData } from "../../actions/form";
import { changeFilteredName } from "../../actions/table";
import { getUsersByFilteredNameSaga, getUsersSaga, removeUserSaga } from "../../actions/usersSaga";
import { USERS_KEY } from "../../utils/constants/tableKeys";

const mapStateToProps = (state) => {
    return {
        users: state.table.users.list,
        filteredName: state.table.users.filteredName,
        current: state.profile.current
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(getUsersSaga()),
        putUserToForm: (user) => dispatch(setFormData(USERS_KEY, user)),
        onDelete: (id) => dispatch(removeUserSaga(id)),
        onChangeFilteredName: (filteredName) => {
            dispatch(changeFilteredName(USERS_KEY, filteredName));
            dispatch(getUsersByFilteredNameSaga());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);