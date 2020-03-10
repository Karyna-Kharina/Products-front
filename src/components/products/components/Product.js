import React from "react";

export default function Product({id, name, price, image}) {

    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Price: {price}</div>
            <div>Image: {image}</div>
        </div>
    )
}