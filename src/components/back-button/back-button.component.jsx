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
            <div className="back-button">
                {this.props.path.map(item => {
                    return (
                        <button
                            key={id++}
                            onClick={this.props.onBackClick.bind(null, item)}
                        >
                            <b>{returnName(originalData, item)}</b>
                        </button>
                    );
                })}
            </div>
        );
    }
}

export default BackButton;
