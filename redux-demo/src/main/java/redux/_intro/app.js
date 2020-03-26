import React, {Component} from "react";
import {Container} from "@material-ui/core";
import {createStore} from "redux/_intro/redux";

const initialState = {count: 0};

// function reducer(state, action) {
function reducer(state = {count: 0}, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + action.amount};
        case 'DECREMENT':
            return {count: state.count - action.amount};
        case 'RESET':
            return {count: 0};
        default:
            return state;
    }
}

// const incrementAction = {type: 'INCREMENT', amount: 1};
// const decrementAction = {type: 'DECREMENT', amount: 1};
// const resetAction = {type: 'RESET'};

function increment(amount) {
    return {type: 'INCREMENT', amount};
}

function decrement(amount) {
    return {type: 'DECREMENT', amount};
}

function reset() {
    return {type: 'RESET'};
}

const store = createStore(reducer, initialState);

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    increment() {
        let amount = parseInt(this.refs.amount.value || 1);
        store.dispatch(increment(amount));
    }

    decrement() {
        let amount = parseInt(this.refs.amount.value || 1);
        store.dispatch(decrement(amount));
    }

    reset() {
        store.dispatch(reset());
    }

    render() {
        const count = store.getState().count;

        return (
            <Container className="counter">
                <span className="count">
                    {count}
                </span>

                <div className="buttons">
                    <button className="decrement" onClick={this.decrement}>-</button>
                    <button className="reset" onClick={this.reset}>RESET</button>
                    <button className="increment" onClick={this.increment}>+</button>
                </div>

                <input type="text" ref="amount" defaultValue="1"/>
            </Container>
        )
    }
}