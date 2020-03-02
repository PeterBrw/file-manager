import React, { Component } from "react";
import "./list-directory.styles.css";

import originalData from "../../data";

import { Directory } from "../directory/directory.component";
import BackButton from "../back-button/back-button.component";

import { returnChildren, returnName } from "../../return-children";

class ListDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: originalData,
            path: ["root"],
            name: ["root"]
        };
    }

    onBackClick = pathInput => {
        const { path, name } = this.state;
        if (pathInput !== path[path.length - 1]) {
            let newPath = path.slice(0, path.indexOf(pathInput) + 1);
            this.setState({
                data: returnChildren(originalData, newPath[newPath.length - 1]),
                path: newPath
            });
            console.log(`
                path: ${path}
                newPath: ${newPath}
                pathInput: ${pathInput}
                name: ${name}
            `);
        }
    };

    onClick = id => {
        const { path, name } = this.state;
        this.setState({
            data: returnChildren(originalData, id),
            path: [...path, id],
            name: [...name, returnName(originalData, id)]
        });
        console.log(`
            path: ${path}
            name: ${name} 
            id:   ${id}       
        `);
    };

    render() {
        let { data, path, name } = this.state;

        return (
            <div className="list-directory">
                {path.length > 0 ? (
                    <BackButton
                        onBackClick={this.onBackClick}
                        path={path}
                        name={name}
                    />
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
