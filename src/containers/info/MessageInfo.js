import {connect} from "react-redux";
import MessageInfo from "../../components/info/MessageInfo";
import {closeMessage} from "../../actions/info/infoAction";

const mapStateToProps = (state) => {
    return {
        message: state.messageInfo.message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClose: () => dispatch(closeMessage())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageInfo);