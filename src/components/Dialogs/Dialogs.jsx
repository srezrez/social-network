import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'> Egor </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'> Sveta </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'> Diana </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'> Nastya </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}> Hi </div>
                <div className={s.message}> How are you? </div>
                <div className={s.message}> Hello </div>
            </div>
        </div>
    );
}

export default Dialogs;