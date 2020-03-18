import React, { useState, useEffect } from "react";
import "./list-directory.styles.css";

import importData from "../../data";

import BackButton from "../back-button/back-button.component";
import AddData from "../add-data/add-data.component";

import {
    returnChildren,
    returnName,
    deleteItem,
    changeName
} from "../../return-children";

import CustomList from "../custom-list/custom-list.component";

function ListDirectory() {
    const [data, setData] = useState(importData);
    const [path, setPath] = useState([{ id: "root", name: "root" }]);
    const [word, setWord] = useState("");
    const [originalData, setOriginalData] = useState(data);

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
            setWord("");
        }
    };

    const handleChange = e => {
        setWord(e.target.value);
    };

    const itemDelete = id => {
        setData(deleteItem(data, id));
        setOriginalData(deleteItem(originalData, id));
    };

    const changeFileName = (inputdata, id, newName) => {
        let newData = changeName(
            JSON.parse(JSON.stringify(inputdata)),
            id,
            newName
        );
        setOriginalData(newData);
        setData(returnChildren(newData, path[path.length - 1].id));
    };

    useEffect(() => {
        setOriginalData(originalData);
        setData(data);
    }, [originalData, data]);

    return (
        <div>
            <BackButton
                onBackClick={onBackClick}
                path={path}
                originalData={originalData}
            />

            <CustomList
                onClick={onClick}
                data={data}
                path={path}
                itemDelete={itemDelete}
                changeFileName={changeFileName}
                originalData={originalData}
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
