import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi! How are you?', likesCount: 12},
        {id: 2, message: "It's my new post!", likesCount: 15},
    ];

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
                <Post message={postsData[0].message} count={postsData[0].likesCount} />
                <Post message={postsData[1].message} count={postsData[1].likesCount} />

            </div>
        </div>
    );
}

export default MyPosts;