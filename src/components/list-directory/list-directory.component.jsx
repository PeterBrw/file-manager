import React, { Component } from "react";
import "./list-directory.styles.css";

import data from "../../data";

import { Directory } from "../directory/directory.component";

class ListDirectory extends Component {
    constructor(props) {
        super(props);

        this.state = { data: data, replica: data };
    }

    move = curr => {
        this.setState({ replica: curr.children});
    };
    
    render() {
        let { replica, data } = this.state;
        return (
            <div className="list-directory">
                {replica.map(item => (
                    <Directory
                        key={item.id}
                        name={item.name}
                        type={item.type}
                        move={this.move.bind(null, item)}
                        data={data}
                        id={item.id}
                    />
                ))}
            </div>
        );
    }
}

export default ListDirectory;


function findType(col, id) {
    for (let i = 0; i < col.length; i++) {
        if (col[i].id === id) {
            return col[i];
        }

        if (col[i].children.length > 0) {
            let found = findType(col[i].children, id);
            if (found) {
                return found;
            }
        }
    }

    return null;
}
