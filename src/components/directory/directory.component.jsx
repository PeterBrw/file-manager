import React from "react";
import "./directory.component.jsx.css";
import { Icon } from "../icon/icon.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Directory = ({ id, name, type, onClick, path }) => {
    const show = () => {
        console.log(id);
    };

    return (
        <div className="directory">
            <div className="left" onClick={onClick.bind(null, id)}>
                <Icon className="icon" type={type} />
                <h1 className="header">{name}</h1>
            </div>
            <FontAwesomeIcon
                className="delete-button"
                onClick={show}
                icon={faTrash}
            />
        </div>
    );
};
