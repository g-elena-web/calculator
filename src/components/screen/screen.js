import React, { Component } from "react";

import './screen.css';

export default class Screen extends Component {
    render() {
        const { full, lastVal, curOper, ifEval, res } = this.props;

        return (
            <div className="screen">
                <div className="expression">
                    {(full !== '') ? (ifEval) ? <p>{full}={res}</p> : <p>{full}</p> : <p>&nbsp;</p>}
                </div>
                <div className="display">
                    {(ifEval) ? <p>{res}</p> : (curOper !== '') ? <p>{curOper}</p> : <p>{lastVal}</p>}
                </div>
            </div>
        )
    }
}