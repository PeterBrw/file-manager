import React from "react";
import "./list-directory.styles.css";

import BackButton from "../back-button/back-button.component";
import AddData from "../add-data/add-data.component";

import CustomList from "../custom-list/custom-list.component";

function ListDirectory() {
    // const changeFileName = (inputdata, id, newName) => {
    //     let newData = changeName(
    //         JSON.parse(JSON.stringify(inputdata)),
    //         id,
    //         newName
    //     );
    //     setOriginalData(newData);
    //     setData(returnChildren(newData, path[path.length - 1].id));
    // };

    // useEffect(() => {
    //     setOriginalData(originalData);
    //     setData(data);
    // }, [originalData, data]);

    return (
        <div>
            <BackButton />

            <CustomList />
            <AddData />
        </div>
    );
}

export default ListDirectory;
