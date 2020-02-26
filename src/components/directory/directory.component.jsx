import React from "react";
import "./directory.component.jsx.css";
import { Icon } from "../icon/icon.component";

export const Directory = ({ move, name, type, data, back, state, parent }) => {
    console.log(state.parent);
    return (
        <div className="directory">
            <button onClick={back.bind(null, name)}>Back</button>
            <div onClick={move.bind(null, name)}>
                <Icon type={type} />
                <h1>{name}</h1>
            </div>
        </div>
    );
};
