import React, { Component } from "react";

import './operators.css';

export default class Operators extends Component {
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
                <button id={name} value={char} key={name}>{char}</button>
            );

        return (
            <div className="operators">
                {opButtons}
            </div>
        )
    }
}