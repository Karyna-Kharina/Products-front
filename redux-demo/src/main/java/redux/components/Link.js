import React from 'react';
import PropTypes from 'prop-types';

const Link = ({active, children, onClick, as}) => {

    if (active) {
        return <span>{children}, {as}</span>
    }

    return (
        <a
            href=""
            onClick={e => {
                e.preventDefault();
                onClick()
            }}
        >
            {children}, {as}
        </a>
    )
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;