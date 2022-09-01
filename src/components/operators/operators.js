import React, { Component } from "react";

import { operators } from "../../resources/buttons";

import './operators.css';

export default class Operators extends Component {

    pressOperator = (event) => {
        const op = event.target.value;
        this.props.onPress(op);
    }

    render() {

          const opButtons = operators.map(({char, name}) =>
                <button id={name} value={char} key={name} onClick={this.pressOperator}>{char}</button>
            );

        return (
            <div className="operators">
                {opButtons}
            </div>
        )
    }
}