import React, { useState } from "react";
import "./App.css";

import { MyContext, display } from "./context/display.context";

import ListDirectory from "./components/list-directory/list-directory.component";
import CustomList from "./components/custom-list/custom-list.component";

import withData from "./components/with-data/with-data";

import AddData from "./components/add-data/add-data.component";

import orginalData from "./data";

const ExtendedComponent = withData(CustomList, orginalData);

function App() {
    const [view, setView] = useState(display);

    const onClickContext = () => {
        setView({ row: !view.row });
    };

    return (
        <div className="App">
            <MyContext.Provider value={view.row}>
                <ExtendedComponent />
            </MyContext.Provider>
            <button onClick={onClickContext}>Change Me!</button>
        </div>
    );
}

export default App;
