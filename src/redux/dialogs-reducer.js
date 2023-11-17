const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newText
            }
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            };

        default:
            return state
    }
}

export const addMessageActionCreator = (text) => ({ type: ADD_MESSAGE, newText: text })

export default dialogsReducer;