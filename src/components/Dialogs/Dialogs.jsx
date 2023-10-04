import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} > {props.name} </NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}> {props.message} </div>
    );
}

const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: 'Egor'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Diana'},
        {id: 4, name: 'Nastya'},
    ];

    let dialogsElements = dialogData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Whats new'},
    ];

    let messagesElements = messagesData.map(message => <Message message={message.message} />); 

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;