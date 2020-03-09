import React, { useState } from "react";

import {returnChildren, returnName} from "../../return-children";

function withData(WrappedComponent, dataArrive) {
    return () => {
        const [data, setData] = useState(dataArrive);
        const [path, setPath] = useState([{ id: "root", name: "root" }]);

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
        return <WrappedComponent onClick={onClick} onBackClick={onBackClick} data={data} path={path}/>;
    };
}

export default withData;
