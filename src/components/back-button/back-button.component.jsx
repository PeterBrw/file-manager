import React, { Component } from "react";
import "./back-button.styles.css";

import { returnName } from "../../return-children";
// import originalData from "../../data";

let id = 0;

class BackButton extends Component {
    render() {
        let { path, originalData } = this.props;
        return (
            <div className="back-button">
                {path.map(item => {
                    return (
                        <button
                            key={id++}
                            onClick={this.props.onBackClick.bind(null, item)}
                        >
                            <b>{returnName(originalData, item.id)}</b>
                        </button>
                    );
                })}
            </div>
        );
    }
}

export default BackButton;
