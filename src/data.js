var data = [
    {
        id: 1,
        name: "Desktop",
        type: "folder",
        children: [
            {
                id: 11,
                name: "Child 1",
                type: "folder",
                children: [
                    { id: 55, name: "Child 5", type: "file", children: [] }
                ]
            },
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
export default data;
