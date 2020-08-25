import React from 'react';
import './App.css';
import {connect} from "react-redux";
import AddTaskModal from "./AddTaskModal";
import {Container, Button} from 'reactstrap'

function Board(props) {

    const listOfCards = props.tasks
    const length = props.tasks
    console.log('----------', length)

    return (
        <div>
            <Container>
                <AddTaskModal/>

                {listOfCards.map((el, i) =>
                    <li key={el.id}>
                        {el.name}
                        <Button onClick={() => props.deleteTask(el.id)}>Delete</Button>
                        <Button onClick={() => props.moveUp(i)} disabled={i === 0}>⇧</Button>
                        <Button onClick={() => props.moveDown(i)} disabled={i === props.tasks.length -1}>⇩</Button>
                    </li>)}
                <Button onClick={props.deleteAllTask}>Delete All</Button>
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.list
});

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (cardId) => dispatch({type: 'TASK_DELETE', payload: cardId}),   // dispatch отправь объект(action) в редюсер
    deleteAllTask: () => dispatch({type: 'DELETE_ALL_TASKS'}),
    moveUp: (index) => dispatch({type: 'MOVE_UP', payload: {index}}),
    moveDown: (index) => dispatch({type: 'MOVE_DOWN', payload: {index}}),
    // moveUp: (listIndexCurrent, listIndexPrevious) => dispatch({type: 'MOVE_UP', payload: {listIndexCurrent, listIndexPrevious}    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
