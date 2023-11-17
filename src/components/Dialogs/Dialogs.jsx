import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="message" placeholder="New message"/>
            </div>
            <div>
                <button>Add Message</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form: 'message'
}) (MessageForm)

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);

    if (!props.isAuth) {
        return <Navigate to="/login" />
    }

    const onSubmit = (formData) => {
        props.addMessage(formData.message);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <MessageReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

export default Dialogs;