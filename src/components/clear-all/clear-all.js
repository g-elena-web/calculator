import React, { Component } from "react";

import './clear-all.css';

export default class ClearAll extends Component {
    render() {
        return (
            <button className="clear-all" onClick={this.props.onPress}>C</button>
        )
    }
}