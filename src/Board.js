import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";
import AddTaskModal from "./AddTaskModal";
import {Container, Button} from 'reactstrap'
import EditModalTask from "./EditModalTask";

function Board(props) {

    const listOfCards = props.tasks

    return (
        <div>
            <Container>
                <AddTaskModal/>
                <EditModalTask editModal={props.editModal}/>
                {listOfCards.map((el, i) =>
                    <li key={el.id}>
                        <input type='checkbox'/>
                        {el.name}
                        <Button onClick={() => props.deleteTask(el.id)}>Delete</Button>
                        <Button onClick={() => props.moveUp(i)} disabled={i === 0}>⇧</Button>
                        <Button onClick={() => props.moveDown(i)} disabled={i === props.tasks.length - 1}>⇩</Button>
                        <Button onClick={() => props.openEditModal(el)}>Edit</Button>

                        {/*<Button onClick={()=> setIsModalOpen()}> Cancel </Button>*/}
                    </li>)}
                <Button onClick={props.deleteAllTask}>Delete All</Button>
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.list,
    editModal: state.editModalOpen

});

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (cardId) => dispatch({type: 'TASK_DELETE', payload: cardId}),   // dispatch отправь объект(action) в редюсер
    deleteAllTask: () => dispatch({type: 'DELETE_ALL_TASKS'}),
    moveUp: (index) => dispatch({type: 'MOVE_UP', payload: index}),
    moveDown: (index) => dispatch({type: 'MOVE_DOWN', payload: index}),
    openEditModal: (card) => dispatch({type: 'OPEN_EDIT_MODAL', payload: card})

});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
