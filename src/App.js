import React, { Component } from "react";
import "./App.css";

import { MyContext, display } from "./context/display.context";

import ListDirectory from "./components/list-directory/list-directory.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            view: display
        };
    }

    onClickContext = () => {
        this.setState({
            view: {
                row: !this.state.view.row
            }
        });
    };

    render() {
        return (
            <div className="App">
                <MyContext.Provider value={this.state.view}>
                    <ListDirectory />
                </MyContext.Provider>
                <button onClick={this.onClickContext}>Change Me!</button>
            </div>
        );
    }
}

export default App;

// const onClick = () => {
//     display = { row: !display.row };
// };
