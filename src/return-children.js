export const returnChildren = (data, id) => {
    if (id === "root" || id === null) {
        return data;
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return data[i].children;
        }

        if (data[i].children.length > 0) {
            let found = returnChildren(data[i].children, id);
            if (found) {
                return found;
            }
        }
    }

    return null;
};

export const returnName = (data, id) => {
    if (id === "root" || id === null) {
        return "root";
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return data[i].name;
        }

        if (data[i].children.length > 0) {
            let found = returnName(data[i].children, id);
            if (found) {
                return found;
            }
        }
    }

    return null;
};

export const returnKids = (data, id) => {
    if (id === "root" || id === null) {
        return data;
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return data[i].children;
        }

        if (data[i].children.length > 0) {
            let found = returnKids(data[i].children, id);
            if (found) {
                return found;
            }
        }
    }

    return null;
};
