import {connect} from "react-redux";
import Profile from "../../components/users/Profile";

const mapStateToProps = (state) => {

    return {
        firstName: state.profile.current.firstName,
        lastName: state.profile.current.lastName,
        date: state.profile.current.date,
        phoneNumber: state.profile.current.phoneNumber,
        email: state.profile.current.email,
        photo: state.profile.current.photo,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);