import React, { useState } from "react";
import "./App.css";

import { MyContext, display } from "./context/display.context";

import ListDirectory from "./components/list-directory/list-directory.component";
import CustomList from "./components/custom-list/custom-list.component";

import withData from "./components/with-data/with-data";

import orginalData from "./data";

const ExtendedComponent = withData(CustomList, orginalData);

function App() {
    const [view, setView] = useState(display);

    const onClickContext = () => {
        setView({ row: !view.row });
    };

    // const ListDirectoryWithData = withDate(ListDirectory, {data});

    return (
        <div className="App">
            {/* back button or path it has to be render here */}
            <MyContext.Provider value={view.row}>
                <ExtendedComponent />
                <ExtendedComponent />
            </MyContext.Provider>
            <button onClick={onClickContext}>Change Me!</button>
        </div>
    );
}

export default App;
