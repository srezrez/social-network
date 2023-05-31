import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const SelectedLink = ({isActive}) => isActive ? s.active : s.item;

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className={SelectedLink}> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={SelectedLink}> Messages </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={SelectedLink}> News </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={SelectedLink}> Music </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={SelectedLink}>  Settings </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;