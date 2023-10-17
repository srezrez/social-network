let state = {

    profilePage : {
        posts: [
            { id: 1, message: 'Hi! How are you?', likesCount: 12 },
            { id: 2, message: "It's my new post!", likesCount: 15 },
        ]
    },

    dialogsPage : {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Whats new' },
        ],
        dialogs: [
            { id: 1, name: 'Egor' },
            { id: 2, name: 'Sveta' },
            { id: 3, name: 'Diana' },
            { id: 4, name: 'Nastya' },
        ]
    },
    
    sideBar : {
        friends : [
            { id: 1, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80', name: 'Andrew'},
            { id: 2, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80', name: 'Egor'},
            { id: 3, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80', name: 'Sveta'}
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
}

export default state;