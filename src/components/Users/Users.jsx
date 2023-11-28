import React from "react";
import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <Paginator currentPage={props.currentPage} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged} />
            {
                props.users.map(u => <User key={u.id}
                    user={u}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow} />)
            }
        </div>
    );
}

export default Users;