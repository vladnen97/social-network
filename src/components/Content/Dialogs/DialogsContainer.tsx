import React from 'react';
import {StoreType} from '../../../redux/store';
import {addMessageActionCreator, changeNewMessageTextActionCreator} from '../../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';

type PropsType = {
    store: StoreType
}


export function DialogsContainer({store}: PropsType) {
    const state = store.getState()

    const addNewMessage = (): void => store.dispatch(addMessageActionCreator())
    const updateNewMessageText = (value: string): void => {
        store.dispatch(changeNewMessageTextActionCreator(value));
    }


    return (
        <Dialogs updateNewMessageText={updateNewMessageText}
                 addNewMessage={addNewMessage}
                 dialogsData={state.dialogsPage}
        />
    )
}




