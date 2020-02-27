import React, { Component } from "react";
import "./back-button.styles.css";

class BackButton extends Component {
    render() {
        return <button onClick={this.props.onClick}>back</button>;
    }
}

export default BackButton;