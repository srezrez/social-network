import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi! How are you?', likesCount: 12},
        {id: 2, message: "It's my new post!", likesCount: 15},
    ];

    let postsElements = postsData.map(post => <Post message={post.message} count={post.likesCount} />);

    return (
        <div className={s.postBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;