import React from "react";
import "./list-directory.styles.css";

import BackButton from "../back-button/back-button.component";
import AddData from "../add-data/add-data.component";

import CustomList from "../custom-list/custom-list.component";

function ListDirectory() {
    return (
        <div>
            <BackButton />
            <CustomList />
            <AddData />
        </div>
    );
}

export default ListDirectory;
