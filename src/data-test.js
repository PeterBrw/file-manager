var data = [
    {
        id: 1,
        name: "Desktop",
        type: "folder",
        children: [
            { id: 11, name: "Child 1", type: "file", children: [] },
            { id: 12, name: "Child 2", type: "file", children: [] }
        ]
    },
    {
        id: 2,
        name: "Downloads",
        type: "folder",
        children: [
            {
                id: 20,
                name: "Child 1",
                type: "folder",
                children: [
                    {
                        id: 21,
                        name: "Grand Child 1",
                        type: "file",
                        children: []
                    },
                    {
                        id: 22,
                        name: "Grand Child 2",
                        type: "file",
                        children: []
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Bin",
        type: "folder",
        children: [
            { id: 31, name: "Child 1", type: "file", children: [] },
            { id: 32, name: "Child 2", type: "file", children: [] }
        ]
    }
];

const returnChildren = (data, id) => {
    if (id === "root" || id === null) {
        return data;
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return data[i];
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

console.log(returnChildren(data, 11).name);
