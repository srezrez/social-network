import React from 'react';
import s from './MyPosts.module.css';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    //withAuthRedirect
) (MyPosts);