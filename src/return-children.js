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

export const deleteItem = (data, id) => {
    let first = false;

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            first = true;
        }
    }

    if (first) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                return data.filter(item => item.id !== id);
            }
        }
    } else {
        data.forEach(function(item) {
            item.children = item.children.filter(function(children) {
                return children.id !== id;
            });
        });

        return data;
    }
};
