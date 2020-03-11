import React, { useContext } from "react";

import { MyContext } from "../../context/display.context";

import { Directory } from "../directory/directory.component";

function CustomList(props) {
    const row = useContext(MyContext);
    let classNameList = row ? "list-directory-row" : "list-directory-column";

    return (
        <div className={classNameList}>
            {props.data.map(item => (
                <Directory
                    key={item.id}
                    onClick={props.onClick}
                    {...item}
                    path={props.path}
                    itemDelete={props.itemDelete}
                /> 
            ))}
        </div>
    );
}

export default CustomList;
