import React, { Component } from "react";

import './delete-last.css';

export default class DeleteLast extends Component {
    render() {
        return (
            <button className="delete-last">{`<-`}</button>
        )
    }
}