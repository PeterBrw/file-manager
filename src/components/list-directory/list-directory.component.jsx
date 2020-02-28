import React, { Component } from "react";
import "./list-directory.styles.css";

import originalData from "../../data";

import { Directory } from "../directory/directory.component";
import BackButton from "../back-button/back-button.component";

import { returnChildren } from "../../return-children";

class ListDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: originalData,
            path: ["root"],
            name: ""
        };
    }

    onBackClick = () => {
        const { path } = this.state;
        path.pop();
        this.setState({
            data: returnChildren(originalData, path[path.length - 1]),
            path
        });
    };

    onClick = id => {
        console.log(id);
        const { path } = this.state;
        this.setState({
            data: returnChildren(originalData, id),
            path: [...path, id]
        });
    };

    render() {
        let { data, path } = this.state;

        return (
            <div className="list-directory">
                {path.length > 1 ? (
                    <BackButton onBackClick={this.onBackClick} path={path} />
                ) : null}
                {data.map(item => (
                    <Directory
                        key={item.id}
                        onClick={this.onClick}
                        {...item}
                        path={path}
                    />
                ))}
            </div>
        );
    }
}

export default ListDirectory;
