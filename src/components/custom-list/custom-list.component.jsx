import React, { useContext } from "react";

import { MyContext } from "../../context/display.context";

import BackButton from "../back-button/back-button.component";
import { Directory } from "../directory/directory.component";

function CustomList(props) {
    const row = useContext(MyContext);
    let classNameList = row ? "list-directory-row" : "list-directory-column";

    return (
        <div className={classNameList}>
            {props.path.length > 0 ? (
                <BackButton onBackClick={props.onBackClick} path={props.path} />
            ) : null}
            {props.data.map(item => (
                <Directory
                    key={item.id}
                    onClick={props.onClick}
                    {...item}
                    path={props.path}
                />
            ))}
        </div>
    );
}

export default CustomList;
