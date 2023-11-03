import React from "react";
import s from './Users.module.css';

let Users = (props) => {

    if(props.users.length === 0) {
        debugger;
        props.setUsers([
            { id: 1, photoUrl: 'https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/third-person-wiki_ver_1.png', followed: false, name: 'Svetlana', status: 'I am fine', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoUrl: 'https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/third-person-wiki_ver_1.png', followed: true, name: 'Anton', status: 'I am boss', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, photoUrl: 'https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/third-person-wiki_ver_1.png', followed: false, name: 'Egor', status: 'I am Egor', location: { city: 'Minsk', country: 'Belarus' } },
        ]);
    }
    debugger;

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed 
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;