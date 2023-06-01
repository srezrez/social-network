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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name='Egor' id='1' />
                <DialogItem name='Sveta' id='2'/>
                <DialogItem name='Diana' id='3'/>
                <DialogItem name='Nastya' id='4'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How are you?' />
                <Message message='Whats new?' />
            </div>
        </div>
    );
}

export default Dialogs;