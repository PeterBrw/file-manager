import React, { Component } from "react";
import "./back-button.styles.css";

import { returnName } from "../../return-children";

// let id = 0;              // without originalData just use the name from path

class BackButton extends Component {
    render() {
        let { path, originalData } = this.props;
        return (
            <div className="back-button">
                {path.map(item => {
                    return (
                        <button
                            key={Math.floor(
                                Math.random() * (10000 - 1000 + 1) + 1000
                            )}
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
