import React, { Component } from "react";
import "./list-directory.styles.css";

import originalData from "../../data";

import { Directory } from "../directory/directory.component";
import BackButton from "../back-button/back-button.component";

import { returnChildren, getPathArray } from "../../return-children";

class ListDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: originalData,
            path: ["root"],
            name: "root"
        };
    }

    onBackClick = pathInput => {
        const { path } = this.state;
        if (pathInput !== path[path.length - 1]) {
            let newPath = path.slice(0, path.indexOf(pathInput) + 1);
            this.setState({
                data: returnChildren(originalData, newPath[newPath.length - 1]),
                path: newPath
            });
        }
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
                {path.length > 0 ? (
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
