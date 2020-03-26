import React from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions';
import Link from "../components/Link";

const FilterLink = ({active, children, onClick, onClick2}) => {
    return (
        <>
            <Link onClick={onClick} active={active} children={children}/>
        </>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
            dispatch({
                type: "Asdasd",
                asd: 3434234,
            })
        },
        onClick2: () => {
            dispatch({
                type: "Asdasd",
                asd: 3434234,
            })
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink);