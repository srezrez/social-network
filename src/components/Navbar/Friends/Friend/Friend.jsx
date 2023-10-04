import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.item}>
            <img src={props.img} />
            <div>
                <span>{props.name}</span>
            </div>
        </div>
    );
}

export default Friend;