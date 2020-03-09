import React, { useState } from "react";

import { returnChildren, returnName } from "../../return-children";

function withData(WrappedComponent, dataArrive) {
    return () => {
        const [data, setData] = useState(dataArrive);
        const [path, setPath] = useState([{ id: "root", name: "root" }]);
        const [word, setWord] = useState("");

        const onBackClick = pathInput => {
            if (pathInput !== path[path.length - 1].id) {
                let newPath = path.slice(0, path.indexOf(pathInput) + 1);
                setData(
                    returnChildren(dataArrive, newPath[newPath.length - 1].id)
                );
                setPath(newPath);
            }
        };

        const onClick = id => {
            setData(returnChildren(dataArrive, id));
            setPath([...path, { id, name: returnName(dataArrive, id) }]);
        };

        const handleSubmit = folderName => {
            console.log(folderName);
            let children = returnChildren(dataArrive, path[path.length - 1].id);
            children.push({
                id: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
                name: folderName,
                type: "folder",
                children: []
            });
            setData(children);
            console.log(children);
        };

        // const setChildren = e => {
        //     setWord(e.target.value);
        //     console.log(word);
        // };

        return (
            <WrappedComponent
                onClick={onClick}
                onBackClick={onBackClick}
                data={data}
                path={path}
                handleSubmit={handleSubmit}
            />
        );
    };
}

export default withData;
