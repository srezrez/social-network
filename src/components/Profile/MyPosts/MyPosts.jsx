import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className='posts'>
                <Post message='Hi! How are you?' count='15'/>
                <Post message="It's my new post!" count='20'/>
            </div>
        </div>
    );
}

export default MyPosts;