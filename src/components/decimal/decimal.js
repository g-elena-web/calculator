import React, { Component } from "react";

import './decimal.css';

export default class Decimal extends Component {
    render() {
        return (
            <button className="decimal" style={{gridArea: "decimal"}} value="." onClick={this.props.onPress}>.</button>
        )
    }
}