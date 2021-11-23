import React from "react";

const Product = ({ id, name, price, image }) => (
    <div>
        <div>ID: {id}</div>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
        <div>Image: {image}</div>
    </div>
);

export default Product;