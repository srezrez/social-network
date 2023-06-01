import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} > {props.name} </NavLink>
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

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Whats new'},
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
                <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
                <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
                <DialogItem name={dialogData[3].name} id={dialogData[3].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    );
}

export default Dialogs;