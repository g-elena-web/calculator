import React, { Component } from "react";

import './numbers.css';

export default class Numbers extends Component {

    pressNumber = (event) => {
        const num = event.target.value;
        this.props.onPress(num);
    }

    render() {
        const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const numButtons = numbers.map((num, i) =>
                <button id={num} value={i} key={num} onClick={this.pressNumber}>{i}</button>
            );
        return (
            <div className="numbers">
                {numButtons}
            </div>
        )
    }
}