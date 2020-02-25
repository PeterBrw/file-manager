var data = [
    {
        id: 1,
        name: "Parent 1",
        type: "folder",
        children: [
            { id: 11, name: "Child 1", type: "file", children: [] },
            { id: 12, name: "Child 2", type: "file", children: [] }
        ]
    },
    {
        id: 2,
        name: "Parent 2",
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
        name: "Parent 3",
        type: "folder",
        children: [
            { id: 31, name: "Child 1", type: "file", children: [] },
            { id: 32, name: "Child 2", type: "file", children: [] }
        ]
    }
];

function findType(col, id) {
    for (let i = 0; i < col.length; i++) {
        if (col[i].id === id) {
            return col[i];
        }

        if (col[i].children.length > 0) {
            let found = findType(col[i].children, id);
            if (found) {
                return found;
            }
        }
    }

    return null;
}

console.log(findType(data, 22));
