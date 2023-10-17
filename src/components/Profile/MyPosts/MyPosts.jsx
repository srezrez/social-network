import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postsData.map(post => <Post message={post.message} count={post.likesCount} />);

    let newPostElement = React.createRef(); // Create empty link

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={s.postBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                {/* Bind empty link to textarea */}
                    <textarea ref = {newPostElement}></textarea> 
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;