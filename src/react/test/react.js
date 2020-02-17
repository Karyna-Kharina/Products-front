import React, {Component} from "react";

const FormatName = (props) => props.firstName + " " + props.lastName;

const GetGreeting = (props) => {

    if (props.firstName && props.lastName) {
        return <h3>Hello, <FormatName {...props} />!</h3>
    }
    return <h3>Hello, stranger!</h3>;
};

const Welcome = (props) => <h1>Good night, {props.name}</h1>;

const user = {
    firstName: "Lui",
    lastName: "Johnson"
};

export default class MyComponent extends Component {

    constructor(props) {

        super(props);
        this.state = {time: new Date().toLocaleTimeString()};

        setInterval(() => {
            console.log("--- set interval ---", this.state.time);

            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    render() {
        console.log("--- MyComponent render() ---");

        return (
            <div>
                <h1>Hello, React!</h1>
                <h1>Hello, Bus!</h1>
                <GetGreeting {...user}  />
                <GetGreeting/>
                <FormatName {...user} />
                {<h3>Date: {new Date().toLocaleDateString()}</h3>}
                <h3>Time: {this.state.time} </h3>
                <Welcome name={new Date().getSeconds() % 2 === 0 ? "Businka" : "Karine"}/>
            </div>
        )
    }
}
