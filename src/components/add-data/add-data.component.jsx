import React, { useState } from "react";

import { returnChildren } from "../../return-children";

import { addItem } from "../../redux/actions/manipulateAction";
import { addItemData } from "../../redux/actions/dataAction";

import { useSelector, useDispatch } from "react-redux";

function AddData() {
    const [word, setWord] = useState("");

    const dispatch = useDispatch();
    const manipulateData = useSelector(store => store.manipulateReducer);
    const path = useSelector(store => store.pathReducer);

    const anotherData = [...manipulateData];

    const handleSubmit = () => {
        if (word !== "") {
            dispatch(
                addItem({
                    data: anotherData,
                    id: path[path.length - 1].id,
                    word: word
                })
            );
            const children = returnChildren(
                anotherData,
                path[path.length - 1].id
            );
            console.log(children);
            dispatch(addItemData(children));
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
