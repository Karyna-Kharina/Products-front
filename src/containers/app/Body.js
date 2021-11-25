import { connect } from "react-redux";
import Body from "../../components/app/Body";

const mapStateToProps = (state) => ({
    currentUser: state.profile.current
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Body);