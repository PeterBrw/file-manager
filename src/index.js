import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { dataReducer } from "./redux/reducers/dataReducer";
import { pathReducer } from "./redux/reducers/pathReducer";
import { manipulateReducer } from "./redux/reducers/manipulateReducer";
import { deleteItemData } from "./redux/actions/dataAction";
import {
    deleteItemManipulate,
    nameChange
} from "./redux/actions/manipulateAction";

import { onClickPath, onBackClickPath } from "./redux/actions/pathAction";
import { onClickData } from "./redux/actions/dataAction.js";
// import { onBackClickPath } from "./redux/actions/pathAction";
import { onBackClickData } from "./redux/actions/dataAction";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    dataReducer,
    pathReducer,
    manipulateReducer
});

export const onClick = id => {
    return dispatch => {
        dispatch(onClickData(id));
        dispatch(onClickPath(id));
    };
};

export const onBackClick = (pathInput, obj) => {
    return dispatch => {
        dispatch(onBackClickPath(pathInput));
        console.log("before dispatch", pathInput);
        console.log("path:", store.getState().pathReducer);
        dispatch(onBackClickData(obj));
    };
};

export const deleteItemEl = (id, data, anotherData) => {
    return dispatch => {
        dispatch(deleteItemData({ data: data, id: id }));
        dispatch(deleteItemManipulate({ data: anotherData, id: id }));
    };
};

export const editName = (inputData, id, newName, pathId) => {
    return dispatch => {
        dispatch(
            nameChange({ inputData: inputData, id: id, newName: newName })
        );
        console.log(inputData, id, newName, pathId);
        // dispatch(onBackClickData({ inputData: inputData, pathId: pathId }));
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
