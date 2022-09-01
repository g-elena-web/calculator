import React, { Component } from "react";

import './numbers.css';

export default class Numbers extends Component {
    render() {
        const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const numButtons = numbers.map((num, i) =>
                <button id={num} value={i} key={num}>{i}</button>
            );
        return (
            <div className="numbers">
                {numButtons}
            </div>
        )
    }
}