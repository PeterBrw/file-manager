import React, { useContext, useState, useEffect } from "react";

import { MyContext } from "../../context/display.context";

import { Directory } from "../directory/directory.component";

import { useSelector } from "react-redux";
import { returnChildren } from "../../return-children";

function CustomList(props) {
    const data = useSelector(store => store.dataReducer);
    const path = useSelector(store => store.pathReducer);
    
    const [children, setChildren] = useState(returnChildren(data, path[path.length - 1].id));

    const row = useContext(MyContext);
    let classNameList = row ? "list-directory-row" : "list-directory-column";

    useEffect(() => {
       setChildren(returnChildren(data, path[path.length - 1].id))
    }, [path, data]);

    return (
        <div className={classNameList}>
            {children.map(item => (
                <Directory
                    key={item.id}
                    onClick={props.onClick}
                    {...item}
                    path={props.path}
                    itemDelete={props.itemDelete}
                    changeFileName={props.changeFileName}
                    setChildren={setChildren}
                />
            ))}
        </div>
    );
}

export default CustomList;
