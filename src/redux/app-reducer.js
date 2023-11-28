import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { authMe } from "./auth-reducer";

const INIT_SUCCESS = 'app/INIT_SUCCESS';

let initialState = {
    initialized: false
};

export const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INIT_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const initSuccess = () => ({ type: INIT_SUCCESS });

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(authMe());
        promise.then(() => {
            dispatch(initSuccess());
        });
    }
}

export default appReducer;