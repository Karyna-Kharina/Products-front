import { connect } from "react-redux";
import Profile from "../../components/profile";

const mapStateToProps = (state) => {
    return {
        firstName: state.profile.current.firstName,
        lastName: state.profile.current.lastName,
        birthday: state.profile.current.birthday,
        phoneNumber: state.profile.current.phoneNumber,
        email: state.profile.current.email,
        photo: state.profile.current.photo
    };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);