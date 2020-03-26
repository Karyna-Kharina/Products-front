import React from "react";
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default ({onIncrement, count, onDecrement}) => {

    console.log(count);

    return (
        <Container>
            <Button onClick={onDecrement}>-</Button>
            {count}
            <Button onClick={onIncrement}>+</Button>
        </Container>
    )
}