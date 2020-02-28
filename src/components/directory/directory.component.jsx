import React from "react";
import "./directory.component.jsx.css";
import { Icon } from "../icon/icon.component";

export const Directory = ({ id, name, type, onClick, path }) => {
    return (
        <div className="directory">
            <div onClick={onClick.bind(null, id)}>
                <Icon type={type} />
                <h1>{name}</h1>
            </div>
        </div>
    );
};
