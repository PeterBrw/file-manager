import React, { Component } from "react";
import "./list-directory.styles.css";

import originalData from "../../data";

import { Directory } from "../directory/directory.component";
import BackButton from "../back-button/back-button.component";

class ListDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = { data: originalData, path: ["root"] };
    }

    onBackClick = () => {
        const { path } = this.state;
        path.pop();
        console.log(path);
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

        console.log();
        return (
            <div className="list-directory">
                {path.length > 1 ? <BackButton onClick={this.onBackClick} /> : null}
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

const returnChildren = (data, id) => {
    if (id === "root" || id === null) {
        return data;
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return data[i].children;
        }

        if (data[i].children.length > 0) {
            let found = returnChildren(data[i].children, id);
            if (found) {
                return found;
            }
        }
    }

    return null;
};
