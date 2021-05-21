
import React, { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About, {this.props.name}</h1>
            </div>

        );
    }
}