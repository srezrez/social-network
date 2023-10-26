import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    debugger;
    let postsElements = props.posts.map(post => <Post message={post.message} count={post.likesCount} />);

    let newPostElement = React.createRef(); // Create empty link

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        debugger;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                {/* Bind empty link to textarea */}
                    <textarea ref = {newPostElement} onChange = {onPostChange} value = {props.newPostText}/>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;