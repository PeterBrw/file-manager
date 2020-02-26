import React from "react";
import "./directory.component.jsx.css";
import { Icon } from "../icon/icon.component";

export const Directory = ({ move, name, type, data, back, state, parent }) => {
    return (
        <div className="directory">
            { parent.length > 0 ? <button onClick={back.bind(null, name)} >Back</button> : null}
            <div onClick={move.bind(null, name)}>
                <Icon type={type} />
                <h1>{name}</h1>
            </div>
        </div>
    );
};
