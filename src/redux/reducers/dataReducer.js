import importedData from "../../data";
import { changeName, deleteItem, addItem } from "../../return-children";

// const ON_CLICK_DATA = "ON_CLICK_DATA";
// const ON_BACK_CLICK_DATA = "ON_BACK_CLICK_DATA";
const ADD_ITEM_DATA = "ADD_ITEM_DATA";
const DELETE_ITEM_DATA = "DELETE_ITEM_DATA";
const NAME_CHANGE = "NAME_CHANGE";

const initialState = importedData;

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ON_CLICK_DATA:
        //     return state;
        // case ON_BACK_CLICK_DATA: {
        //     console.log(action.payload.id);
        //     return returnChildren(action.payload.data, action.payload.id);
        // }
        case ADD_ITEM_DATA:
            return addItem(
                action.payload.data,
                action.payload.id,
                action.payload.word
            );
        case DELETE_ITEM_DATA:
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
