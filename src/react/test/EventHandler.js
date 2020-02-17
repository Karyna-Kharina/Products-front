import React, {Component} from "react";

export default class Toggle extends Component {

    constructor(props) {
        console.log("constructor()");

        super(props);
        this.state = {isToggleOn: true};

        // Эта привязка обязательна для работы `this` в колбэке
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("handleClick()");

        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    deleteRow() {

    }
    render() {
        console.log("render()");
        
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? "ON" : "OFF"}
                </button>

                <button onClick={(e) => this.deleteRow(id, e)}>
                    Delete row
                </button>
                <button onClick={this.deleteRow.bind(this, id)}>
                    Delete row
                </button>
            </div>
        )
    }

    // второй вариант без реализации метода handleClick(), не желательно использовать
    //
    // handleClick() {
    //     console.log("this: ", this);
    // }
    //
    // render() {
    //     return (
    //         <button onClick={(e) => this.handleClick(e)}>
    //             {this.state.isToggleOn ? "ON" : "OFF"}
    //         </button>
    //     )
    // }
}
