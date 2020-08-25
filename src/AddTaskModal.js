import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";
import {Modal, Button, ModalHeader, ModalBody, ModalFooter, Label, Input} from "reactstrap";

function AddTaskModal(props) {


    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newName, setNewName] = useState('')

    const addButtonHandler = () => {
        props.addTask(newName)
        setIsModalOpen(false)
        setNewName('')
    }


    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>Add New</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader> Add new Task </ModalHeader>
                <ModalBody>
                    <Label htmlFor=''>New Card Name:</Label>
                    <Input type='text' value={newName} onChange={(e) => setNewName(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={addButtonHandler}>Add</Button>
                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
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
