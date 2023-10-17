import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map(message => <Message message={message.message} />); 

    let addMessageLink = React.createRef();
    let addMessage = () => {
        let text = addMessageLink.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

            <div>
                <div>
                    <textarea ref = {addMessageLink}></textarea> 
                </div>
                <div>
                    <button onClick={ addMessage }>Add Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;