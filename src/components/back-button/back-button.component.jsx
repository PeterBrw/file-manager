import React, { Component } from "react";
import "./back-button.styles.css";

import { returnChildren } from "../../return-children";
import originalData from "../../data";

let id = 0;

class BackButton extends Component {
    render() {
        let { path } = this.props;
        let newPath = [...path];
        // newPath();
        return (
            <div>
                {this.props.path.map(item => (
                    <button key={id++} onClick={this.props.onBackClick}>
                        {returnChildren(originalData, item)[0].name}
                    </button>
                ))}
            </div>
        );
    }
}

export default BackButton;

//