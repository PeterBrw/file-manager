import React, { Component } from "react";
import "./back-button.styles.css";

import { returnChildren, returnName } from "../../return-children";
import originalData from "../../data";

let id = 0;

class BackButton extends Component {
    render() {
        let { path, name } = this.props;

        console.log(path[path.length - 1]);
        return (
            <div>
                {this.props.path.map(item => (
                    <button
                        key={id++}
                        onClick={this.props.onBackClick.bind(null, item)}
                    >
                        {returnName(originalData, path[path.length - 1])}
                    </button>
                ))}
            </div>
        );
    }
}

export default BackButton;

//
