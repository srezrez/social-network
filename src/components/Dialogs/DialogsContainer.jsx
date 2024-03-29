import s from './Dialogs.module.css';
import Dialogs from './Dialogs';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        addMessage: (text) => {
            dispatch(addMessageActionCreator(text));
        }

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);