import {connect} from "react-redux";
import Component from "./component";
import {decrement, increment} from "./action";

// сюда передаются только пропсы
const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
};

// сюда передаются только функции
const mapDispatchToProps = (dispatch) => {
   return {
       onIncrement: () => dispatch(increment()),
       onDecrement: () => dispatch(decrement())
   }
};

// на выходе получаем Component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);