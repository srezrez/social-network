import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let initialState = {
    posts: [
        { id: 1, message: 'Hi! How are you?', likesCount: 12 },
        { id: 2, message: "It's my new post!", likesCount: 15 },
    ]
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator("post test");
    let newState = profileReducer(initialState, action);
    expect(newState.posts.length).toBe(3);
})

it('message of new post should be correct', () => {
    let action = addPostActionCreator("post test");
    let newState = profileReducer(initialState, action);
    expect(newState.posts[2].message).toBe("post test");
})

it('after deleting legth of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(initialState, action);
    expect(newState.posts.length).toBe(1);
})

