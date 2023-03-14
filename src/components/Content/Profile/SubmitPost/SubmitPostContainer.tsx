import React from 'react';
import {StoreType} from '../../../../redux/store';
import {addPostActionCreator, ChangeNewPostTextActionCreator} from '../../../../redux/profileReducer';
import {SubmitPost} from './SubmitPost';

type PropsType = {
    store: StoreType
}

export function SubmitPostContainer({store}: PropsType) {

    const addPost = ():void => {
        store.dispatch(addPostActionCreator());
    }
    const onChangeText = (value: string): void => {
        store.dispatch(ChangeNewPostTextActionCreator(value));
    }

    return (
        <SubmitPost postTextValue={store.getState().profilePage.postTextValue}
                    updateNewPostText={onChangeText}
                    addPost={addPost}
        />
    );
}