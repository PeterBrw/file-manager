import React from "react";
import "./directory.component.jsx.css";
import { Icon } from "../icon/icon.component";

export const Directory = ({ id, name, type, onClick, path }) => {
    console.log(type);
    return (
        <div className="directory">
            <div className="left" onClick={onClick.bind(null, id)}>
                <Icon className="icon" type={type} />
                <h1 className="header">{name}</h1>
            </div>
        </div>
    );
};
