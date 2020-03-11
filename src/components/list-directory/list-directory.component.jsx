import React, { useState } from "react";
import "./list-directory.styles.css";

import originalData from "../../data";

import BackButton from "../back-button/back-button.component";
import AddData from "../add-data/add-data.component";

import { returnChildren, returnName } from "../../return-children";

import CustomList from "../custom-list/custom-list.component";

function ListDirectory() {
    const [data, setData] = useState(originalData);
    const [path, setPath] = useState([{ id: "root", name: "root" }]);
    const [word, setWord] = useState("");

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

    const handleSubmit = () => {
        let children = returnChildren(originalData, path[path.length - 1].id);

        if (word !== "") {
            children.push({
                id: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
                name: word,
                type: "folder",
                children: []
            });
            setData(children);
            console.log(children);
            setWord("");
        }
    };

    const handleChange = e => {
        setWord(e.target.value);
    };

    return (
        <div>
            <BackButton onBackClick={onBackClick} path={path} />

            <CustomList
                onClick={onClick}
                onBackClick={onBackClick}
                data={data}
                path={path}
                handleSubmit={handleSubmit}
            />
            <AddData
                handleSubmit={handleSubmit}
                path={path}
                handleChange={handleChange}
                word={word}
            />
        </div>
    );
}

export default ListDirectory;
