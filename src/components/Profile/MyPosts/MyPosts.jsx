import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { FormControl, Textarea } from '../../common/FormsControls/FormsControls';

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={FormControl}
                    fieldType="textarea"
                    placeholder={"I am new post"}
                    name={"post"}
                    validate={[required, maxLengthCreator(10)]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'post'
})(PostForm);

const MyPosts = React.memo((props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} count={post.likesCount} />);

    const onSubmit = (formData) => {
        console.log(formData.post);
        props.addPost(formData.post);
    }
    
    return (
        <div className={s.postBlock}>
            <h3> My posts </h3>
            <PostReduxForm onSubmit={onSubmit} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

export default MyPosts;