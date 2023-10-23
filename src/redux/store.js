import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        profilePage : {
            posts: [
                { id: 1, message: 'Hi! How are you?', likesCount: 12 },
                { id: 2, message: "It's my new post!", likesCount: 15 },
            ],
            newPostText: 'I am new post'
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
            ],
            newMessageText: 'I am new message'
        },
        
        sidebar : {
            friends : [
                { id: 1, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80', name: 'Andrew'},
                { id: 2, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80', name: 'Egor'},
                { id: 3, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80', name: 'Sveta'}
            ]
        }
    },

    getState() {
        return this._state;
    },

    _notify() {
        console.log('State was changed');
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._notify(this._state);
    },
    
    subscribe(observer) {
        this._notify = observer;
    }
};

export default store;