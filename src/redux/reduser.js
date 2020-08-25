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
            return {...state, list: state.list.filter(el => el.id !== action.payload)}


        case 'ADD_TASK':
            return {
                ...state,
                list: [...state.list, {id: Math.random(), name: action.payload, priority: 3, status: 'done'}]
            }

        case 'DELETE_ALL_TASKS':
            return {
                ...state,
                list: []
            }

        case 'MOVE_UP':
            console.log(action.payload)
            let moveUp = [...state.list]
        moveUp.splice(action.payload.index -1, 0, moveUp.splice(action.payload.index, 1)[0])
            return {
                ...state,
                list: moveUp
            }
                // list: state.list.map((el, i) => {
                //     let indexCurrent = action.payload.listIndexCurrent;
                //     let indexPrevious = action.payload.listIndexPrevious;
                //     if (i === indexCurrent) return state.list[indexPrevious]
                //     if (i === indexPrevious) return state.list[indexCurrent]
                //     return el
                // })

                // return moveUp;
                // -----------------------------------
                // const moveUp = (i) => {
                 //     if (i !== 0) {
                 //         const newList = [...list]
                 //         newList.splice(i - 1, 0, newList.splice(i, 1)[0])
                 //         setList(newList)
                 //     }
                 // }
                 // -----------------------------------------
        case 'MOVE_DOWN':
            console.log(action.payload)
            let moveDown = [...state.list]
            moveDown.splice(action.payload.index +1, 0, moveDown.splice(action.payload.index, 1)[0])
            return {
                ...state,
                list: moveDown
            }
        default:

            return state;
    }
};
export default kanbanControlPanel