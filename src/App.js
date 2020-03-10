import React, { useState } from "react";
import "./App.css";

import { MyContext, display } from "./context/display.context";

import ListDirectory from "./components/list-directory/list-directory.component";

function App() {
    const [view, setView] = useState(display);

    const onClickContext = () => {
        setView({row: !view.row})
    };

    // const ListDirectoryWithData = withDate(ListDirectory, {data});

    return (
        <div className="App">
            <MyContext.Provider value={view.row}>
                <ListDirectory />
            </MyContext.Provider>
            <button onClick={onClickContext}>Change Me!</button>
        </div>
    );
}

export default App;
