import styles from './Post.module.css';

const Post = () => {
    return (
        <div className={styles.item}>
            <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80' />
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;