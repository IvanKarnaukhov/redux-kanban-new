import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";

function Board(props) {
    console.log('--------tasks-----', props.deleteTask)

    const addButtonHandler = () => {
        props.addTask(newName)
        setNewName('')
    }

    const listOfCards = props.tasks
    const [newName, setNewName] = useState('')

    return (
        <div className="App">
            {listOfCards.map(card =>
                <li key={card.id}>
                    {card.name}
                    <button onClick={() => props.deleteTask(card.id)}>Delete</button>
                </li>)}
            <label htmlFor=''>New Card Name:</label>
            <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)}/>
            <button onClick={addButtonHandler}>Add</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.list
});

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (cardId) => dispatch({type: 'TASK_DELETE', payload: cardId}),                // dispatch отправь объект(action) в редюсер
    addTask: (newName) => dispatch({type: 'ADD_TASK', payload: newName})                  // dispatch отправь объект(action) в редюсер
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
