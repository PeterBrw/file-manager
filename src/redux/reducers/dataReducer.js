import importedData from "../../data";
import { returnChildren, deleteItem } from "../../return-children";

const ON_CLICK_DATA = "ON_CLICK_DATA";
const ON_BACK_CLICK_DATA = "ON_BACK_CLICK_DATA";
const ADD_ITEM_DATA = "ADD_ITEM_DATA";
const DELETE_ITEM_DATA = "DELETE_ITEM_DATA";

const initialState = importedData;

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_CLICK_DATA:
            return returnChildren(state, action.payload);
        case ON_BACK_CLICK_DATA: {
            console.log(action.payload.id);
            return returnChildren(action.payload.data, action.payload.id);
        }
        case ADD_ITEM_DATA:
            return action.payload;
        case DELETE_ITEM_DATA:
            return deleteItem(action.payload.data, action.payload.id);
        default:
            return state;
    }
};
