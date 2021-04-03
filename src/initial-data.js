

const initialData = {
    tasks: {
        'task-1' : { id: 'task-1', content: 'sleep', info: 'Max and his dog Rover'},
        'task-2' : { id: 'task-2', content: 'eat', info: 'Fred and his dog Rover'},
        'task-3' : { id: 'task-3', content: 'Charge my phone', info: 'Tex and his dog Rover'},
        'task-4' : { id: 'task-4', content: 'Cook dinner', info: 'Mike and his dog Rover'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },

        'column-2': {
            id: 'column-2',
            title: 'Monday',
            taskIds: []
        },

        'column-3': {
            id: 'column-3',
            title: 'Tuesday',
            taskIds: []
        },
    },
    //facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3'],

};

export default initialData;