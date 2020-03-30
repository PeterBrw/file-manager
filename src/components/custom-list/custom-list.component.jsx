import React, { useContext } from "react";

import { MyContext } from "../../context/display.context";

import { Directory } from "../directory/directory.component";

import { useSelector } from "react-redux";

function CustomList(props) {
    const data = useSelector(store => store.dataReducer);

    const row = useContext(MyContext);
    let classNameList = row ? "list-directory-row" : "list-directory-column";

    return (
        <div className={classNameList}>
            {data.map(item => (
                <Directory
                    key={item.id}
                    onClick={props.onClick}
                    {...item}
                    path={props.path}
                    itemDelete={props.itemDelete}
                    changeFileName={props.changeFileName}
                />
            ))}
        </div>
    );
}

export default CustomList;
