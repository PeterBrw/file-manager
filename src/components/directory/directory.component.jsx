import React from "react";
import "./directory.component.jsx.css";
import { Icon } from "../icon/icon.component";

export const Directory = ({ id, name, type, onClick, path }) => {
    console.log(type);
    return (
        <div className="directory">
            <div onClick={onClick.bind(null, id)}>
                <Icon type={type} />
                <h1>{name}</h1>
            </div>
        </div>
    );
};
