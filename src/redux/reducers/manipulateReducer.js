import importedData from "../../data";

import { addItem, deleteItem, changeName } from "../../return-children";

const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const NAME_CHANGE = "NAME_CHANGE";

const initialState = importedData;

export const manipulateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return addItem(
                action.payload.data,
                action.payload.id,
                action.payload.word
            );
        case DELETE_ITEM:
            return deleteItem(action.payload.data, action.payload.id);
        case NAME_CHANGE:
            let newData = changeName(
                JSON.parse(JSON.stringify(action.payload.inputData)),
                action.payload.id,
                action.payload.newName
            );
            return newData;
        default:
            return state;
    }
};
