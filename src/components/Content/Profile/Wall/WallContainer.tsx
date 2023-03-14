import React from 'react';
import {addPostActionCreator, ChangeNewPostTextActionCreator} from '../../../../redux/profileReducer';
import {StoreType} from '../../../../redux/store';
import {Wall} from './Wall';


type PropsType = {
    store: StoreType
}

export function WallContainer({store}: PropsType) {

    const profilePage = store.getState().profilePage

    const addPost = ():void => {
        store.dispatch(addPostActionCreator());
    }
    const onChangeText = (value: string): void => {
        store.dispatch(ChangeNewPostTextActionCreator(value));
    }

    return (
        <Wall posts={profilePage.posts} addPost={addPost} onChangeText={onChangeText} postTextValue={profilePage.postTextValue}/>
    )
}

