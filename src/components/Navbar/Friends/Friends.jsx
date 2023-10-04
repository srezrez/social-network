import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

    let friends = props.state.map(friend => <Friend img={friend.img} name={friend.name} />);
    return (
        <div>
            <h2>Friends</h2>
            {friends}
        </div>
    );
}

export default Friends;