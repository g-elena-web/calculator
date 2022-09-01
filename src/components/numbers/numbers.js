import React, { Component } from "react";

import { numbers } from "../../resources/buttons";

import './numbers.css';

export default class Numbers extends Component {

    pressNumber = (event) => {
        const num = event.target.value;
        this.props.onPress(num);
    }

    render() {
        const numButtons = numbers.map((num, i) =>
                <button className={num} value={i} key={num} onClick={this.pressNumber}>{i}</button>
            );
        return (
            <>
                {numButtons}
            </>
        )
    }
}