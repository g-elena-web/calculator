import React, { Component } from "react";
import ClearAll from "../clear-all";
import Decimal from "../decimal";
import DeleteLast from "../delete-last";
import Equals from "../equals";
import Numbers from "../numbers";
import Operators from "../operators";
import Screen from "../screen";

import './app.css';

export default class App extends Component {
    
    state = {
        full: '',
        lastVal: '0',
        curOper: '',
        ifEval: false,
        res: 0
      };

    render() {
        return (
            <div className="app">
                <Screen />
                <div className="keypad">
                    <Numbers />
                    <Operators />
                    <Decimal />
                    <Equals />
                    <ClearAll />
                    <DeleteLast />
                </div>
            </div>
        )
    }
}