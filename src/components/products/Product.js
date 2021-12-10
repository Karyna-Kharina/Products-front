import React from "react";
import PropTypes from "prop-types";

const Product = ({ id, name, price, image }) => (
    <div>
        <div>ID: {id}</div>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
        <div>Image: {image}</div>
    </div>
);

Product.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    image: PropTypes.string.isRequired
};

export default Product;