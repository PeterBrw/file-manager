import React from "react";
import "./icon.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFolder,
    faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

export const Icon = ({ type }) => {
    return <FontAwesomeIcon icon={getType(type)} />;
};

const getType = type => {
    if (type === "folder") {
        return faFolder;
    } else if (type === "file") {
        return faFileAlt;
    }
};
