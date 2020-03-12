import React from "react";

function AddData({ handleSubmit, handleChange, path, word }) {
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
