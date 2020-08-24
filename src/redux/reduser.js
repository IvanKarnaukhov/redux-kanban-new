const initialState = {
    list: [
        {id: 1, status: 'todo', priority: 1, name: 'Text 1'},
        {id: 2, status: 'progress', priority: 2, name: 'Text 2'},
        {id: 3, status: 'review', priority: 3, name: 'Text 3'},
        {id: 4, status: 'done', priority: 4, name: 'Text 4'}
    ],
    columns:
        [
            {id: 1, status: 'todo', priority: 1, name: 'Text 1'},
            {id: 2, status: 'progress', priority: 2, name: 'Text 2'},
            {id: 3, status: 'review', priority: 3, name: 'Text 3'},
            {id: 4, status: 'done', priority: 4, name: 'Text 4'}
        ],
};

const kanbanControlPanel = (state = initialState, action) => {
    switch (action.type) {             //это как if else

        case 'TASK_DELETE':              // этокак else и возвражает default
            const newState = {...state, list: state.list.filter(el => el.id !== action.payload) }
            return newState;

        case 'ADD_TASK':
            return  {...state, list: [...state.list, {id: Math.random(), name: action.payload, priority: 3, status: 'done'}]}

        default:
            return state
    }
}
export default kanbanControlPanel