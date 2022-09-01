import React, { Component } from "react";

import './operators.css';

export default class Operators extends Component {

    pressOperator = (event) => {
        const op = event.target.value;
        this.props.onPress(op);
    }

    render() {
        const operators = [
            {
              char: '+',
              name: 'add'
            },
            {
              char: '-',
              name: 'subtract'
            },
            {
              char: '*',
              name: 'multiply'
            },
            {
              char: '/',
              name: 'divide'
            }
          ];

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