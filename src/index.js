import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { dataReducer } from "./redux/reducers/dataReducer";
import { pathReducer } from "./redux/reducers/pathReducer";

import { deleteItemData, nameChange } from "./redux/actions/dataAction";
import { onClickPath, onBackClickPath } from "./redux/actions/pathAction";

const rootReducer = combineReducers({
    dataReducer,
    pathReducer
});

export const onClick = id => {
    return dispatch => {
        dispatch(onClickPath(id));
    };
};

export const onBackClick = (pathInput, obj) => {
    return dispatch => {
        dispatch(onBackClickPath(pathInput));
    };
};

export const deleteItemEl = (id, data) => {
    return dispatch => {
        dispatch(deleteItemData({ data: data, id: id }));
    };
};

export const editName = (inputData, id, newName) => {
    return dispatch => {
        dispatch(
            nameChange({ inputData: inputData, id: id, newName: newName })
        );
    };
};

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
