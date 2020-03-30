import importedData from "../../data";
import { returnName } from "../../return-children";

const ON_CLICK_PATH = "ON_CLICK_PATH";
const ON_BACK_CLICK_PATH = "ON_BACK_CLICK_PATH";

const initialState = [{ id: "root", name: "root" }];

export const pathReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_CLICK_PATH: {
            return [
                ...state,
                {
                    id: action.payload,
                    name: returnName(importedData, action.payload)
                }
            ];
        }
        case ON_BACK_CLICK_PATH: {
            const newPath = [...state];
            // console.log(newPath);
            // console.log(newPath.findIndex(item => item.id === action.payload));
            // console.log(
            //     "sliced:",
            //     newPath.slice(
            //         0,
            //         newPath.findIndex(item => item.id === action.payload) + 1
            //     )
            // );
            return newPath.slice(
                0,
                newPath.findIndex(item => item.id === action.payload) + 1
            );
        }
        default:
            return state;
    }
};
