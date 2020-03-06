import React, { useState, useContext } from "react";
import "./list-directory.styles.css";

import originalData from "../../data";

import { Directory } from "../directory/directory.component";
import BackButton from "../back-button/back-button.component";

import { returnChildren, returnName } from "../../return-children";
import { MyContext } from "../../context/display.context";

function ListDirectory() {
    const [data, setData] = useState(originalData);
    const [path, setPath] = useState([{ id: "root", name: "root" }]);

    const onBackClick = pathInput => {
        if (pathInput !== path[path.length - 1].id) {
            let newPath = path.slice(0, path.indexOf(pathInput) + 1);
            setData(
                returnChildren(originalData, newPath[newPath.length - 1].id)
            );
            setPath(newPath);
        }
    };

    const onClick = id => {
        setData(returnChildren(originalData, id));
        setPath([...path, { id, name: returnName(originalData, id) }]);
    };

    const row = useContext(MyContext);
    let classNameList = row ? "list-directory-row" : "list-directory-column";

    return (
        <div className={classNameList}>
            {path.length > 0 ? (
                <BackButton onBackClick={onBackClick} path={path} />
            ) : null}
            {data.map(item => (
                <Directory
                    key={item.id}
                    onClick={onClick}
                    {...item}
                    path={path}
                />
            ))}
        </div>
    );
}

export default ListDirectory;
