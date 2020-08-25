import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";
import {Modal} from "reactstrap";

function AddTaskModal(props) {

    const addButtonHandler = () => {
        props.addTask(newName)
        setNewName('')
    }

    const [newName, setNewName] = useState('')

    return (
        <>
            <Modal>
                <button>Add New</button>
            <label htmlFor=''>New Card Name:</label>
            <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)}/>
            <button onClick={addButtonHandler}>Add</button>
            </Modal>
        </>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.list
});

const mapDispatchToProps = (dispatch) => ({
    addTask: (newName) => dispatch({type: 'ADD_TASK', payload: newName})                  // dispatch отправь объект(action) в редюсер
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskModal);
