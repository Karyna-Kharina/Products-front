import React from "react";

export default function Product({id, name, price}) {

    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Price: {price}</div>
        </div>
    )
}