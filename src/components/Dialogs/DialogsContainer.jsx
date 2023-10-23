import s from './Dialogs.module.css';
import Dialogs from './Dialogs';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    let onSendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    return (<Dialogs updateNewMessageBody = {onMessageChange}
        addMessage = {onSendMessage}
        dialogsPage = {state}/>);
}

export default DialogsContainer;