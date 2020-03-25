import React, { useState } from "react";

import { returnChildren, addItem } from "../../return-children";

function AddData({ path, originalData, setOriginalData, setData }) {
    const [word, setWord] = useState("");

    let anotherData = [...originalData];

    const handleSubmit = () => {
        if (word !== "") {
            setOriginalData(
                addItem(anotherData, path[path.length - 1].id, word)
            );
            const children = returnChildren(
                anotherData,
                path[path.length - 1].id
            );
            setData(children);
            setWord("");
        }
    };

    const handleChange = e => {
        setWord(e.target.value);
    };

    return (
        <div>
            <label>
                Add Folder:
                <input type="text" onChange={handleChange} value={word} />
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default AddData;
