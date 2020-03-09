import React, { useState } from "react";

function AddData({ handleSubmit, setChildren, path }) {
    const [folderName, setFolderName] = useState({ value: "" });

    const onChange = e => {
        setFolderName(e.target.value);
    };

    return (
        <div>
            <label>
                Name:
                <input
                    type="text"
                    value={folderName.value}
                    onChange={onChange}
                />
            </label>
            <button onClick={handleSubmit.bind(null, folderName)}>
                Submit
            </button>
        </div>
    );
}

export default AddData;
