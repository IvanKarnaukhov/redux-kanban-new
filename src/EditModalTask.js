import React, {useEffect, useState} from 'react';
import './App.css';
import {connect} from "react-redux";
import {Modal, Button, ModalHeader, ModalBody, ModalFooter, Label, Input} from "reactstrap";
import {get} from 'lodash'


function EditModalTask(props) {

    const cardName = get(props, 'editModal.card.name', '')
    const cardId = get(props, 'editModal.card.id', '')
    console.log(props)
    console.log('cardName', cardName)
    const [initialEditName, setInitialEditName] = useState('')
    console.log({initialEditName})

    useEffect(()=> {
        setInitialEditName(cardName)
    },[cardName])

    return (
        <>
            <Button onClick={() => props.changeModalStatus()}>Edit</Button>
            <Modal isOpen={props.editModal.isOpen}>
                <ModalHeader> Edit Task </ModalHeader>
                <ModalBody>
                    <Label htmlFor=''>Edit task:</Label>
                    <Input type='text' value={initialEditName} onChange={(e) => setInitialEditName(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={()=> props.editTask({cardId, initialEditName})} >Add</Button>
                    <Button onClick={() => props.closeModal()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

const mapStateToProps = (state) => ({


});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch({type: 'CLOSE_EDIT_MODAL'}),
    editTask: ({cardId, initialEditName}) => dispatch({type: 'EDIT_TASK', payload: {cardId, name: initialEditName}  })

});

export default connect(mapStateToProps, mapDispatchToProps)(EditModalTask);
