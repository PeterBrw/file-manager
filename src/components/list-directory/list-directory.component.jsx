import React, { Component } from "react";
import "./list-directory.styles.css";

import data from "../../data";

import { Directory } from "../directory/directory.component";

class ListDirectory extends Component {
    constructor(props) {
        super(props);

        this.state = { data: data, replica: data, parent: [1] };
    }

    move = curr => {
        this.setState({
            replica: curr.children,
            parent: [...this.state.parent, curr.id]
        });
    };

    back = () => {
        this.setState({
            replica: findType(
                this.state.data,
                this.state.parent[this.state.parent.length - 1]
            )
            // parent: this.state.parent.pop()
        });
        console.log(this.state.parent);
        this.state.parent.pop();
    };

    render() {
        let { replica, data, parent } = this.state;
        let state = this.state;
        return (
            <div className="list-directory">
                {replica.map(item => (
                    <Directory
                        key={item.id}
                        name={item.name}
                        type={item.type}
                        move={this.move.bind(null, item)}
                        data={data}
                        parent={parent}
                        back={this.back.bind(null, item)}
                        state={state}
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
            return col;
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

//
