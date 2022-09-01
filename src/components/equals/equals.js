import React, { Component } from "react";

import './equals.css';

export default class Equals extends Component {
    render() {
        return (
            <button className="equals" onClick={this.props.onPress}>=</button>
        )
    }
}