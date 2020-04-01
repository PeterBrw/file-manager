export const onClickData = payload => {
    return {
        type: "ON_CLICK_DATA",
        payload
    };
};

export const onBackClickData = payload => {
    return {
        type: "ON_BACK_CLICK_DATA",
        payload
    };
};

export const addItemData = payload => {
    return {
        type: "ADD_ITEM_DATA",
        payload
    };
};

export const deleteItemData = payload => {
    return {
        type: "DELETE_ITEM_DATA",
        payload
    };
};

export const nameChange = payload => {
    return {
        type: "NAME_CHANGE",
        payload
    };
};
