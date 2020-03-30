export const addItem = payload => {
    return {
        type: "ADD_ITEM",
        payload
    };
};

export const deleteItemManipulate = payload => {
    return {
        type: "DELETE_ITEM",
        payload
    };
};

export const nameChange = payload => {
    return {
        type: "NAME_CHANGE",
        payload
    };
};



