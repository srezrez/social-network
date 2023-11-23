import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi! How are you?', likesCount: 12 },
        { id: 2, message: "It's my new post!", likesCount: 15 },
    ],
    profile: null,
    status: "",
};

export const profileReducer = (state = initialState, action) => {

    switch(action.type) {
            
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }

        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, newText: text})

export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setUserStatus(data));
        })
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
    }
}

export default profileReducer;