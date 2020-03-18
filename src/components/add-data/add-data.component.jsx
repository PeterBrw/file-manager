import React from "react";

// import { returnChildren, addItem } from "../../return-children";

function AddData({ path, handleChange,handleSubmit, word }) {
    // const [word, setWord] = useState("");

    // // const handleSubmit = () => {
    // //     if (word !== "") {
    // //         let addedItem = addItem(
    // //             originalData,
    // //             path[path.length - 1].id,
    // //             word
    // //         );
    // //         setOriginalData(addedItem);
    // //         console.log(originalData);
    // //         // console.log(returnChildren(originalData, path[path.length - 1].id));
    // //         // setData(returnChildren(originalData, path[path.length - 1].id));
    // //         setData(returnChildren(originalData, path[path.length - 1].id));
    // //         setWord("");
    // //     }
    // // };

    // // const handleChange = e => {
    // //     // maybe word should be as well inside of the other component
    // //     setWord(e.target.value);
    // // };

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
