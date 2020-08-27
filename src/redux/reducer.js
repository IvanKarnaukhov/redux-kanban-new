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
    editModalOpen: {isOpen: false, card: {}}
};



const kanbanControlPanel = (state = initialState, action) => {
    switch (action.type) {             //это как if else

        case 'OPEN_EDIT_MODAL':
            return {...state, editModalOpen: {isOpen: true, card: action.payload}}

        case 'CLOSE_EDIT_MODAL':
            return {...state, editModalOpen: {isOpen: false, card: {}}}

        case 'EDIT_TASK':
            console.log(action.payload)
            return {...state, editModalOpen:{isOpen: false, card: {}}, list: state.list.map(el => {
                if (el.id === action.payload.cardId) return {...el, name: action.payload.name}
                  return el
                })}

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
        moveUp.splice(action.payload -1, 0, moveUp.splice(action.payload, 1)[0])
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
            console.log('MOVE_DOWN', action.payload)
            let moveDown = [...state.list]
            moveDown.splice(action.payload +1, 0, moveDown.splice(action.payload, 1)[0])
            return {
                ...state,
                list: moveDown
            }
        // case 'TASK_EDIT_SAVE':
        //     let editedId = action.payload.editedId;
        //     let initialEditName = action.payload.initialEditName;
        //     console.log(editedId, initialEditName)
        //     return {
        //
        //     }


            // const taskEditSave = () => {
            //     const newEditSave =
            //         console.log("--------", editedId)
            //     console.log("--------", initialEditName)
            // }
            // const onEditTask = (id, task) => {
            //     const updatedTasks = tasks.map(el => {
            //         if(el.id === id)
            //             return {...el, name: task}
            //         else return el;
            //     })
            //     setTasks(updatedTasks);
            // };

        default:

            return state;
    }
};
export default kanbanControlPanel