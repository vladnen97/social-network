import React from 'react';
import {Header} from "./Header/Header";
import {Wall} from "./Wall/Wall";
import {ProfilePageType} from '../../../redux/state';

type PropsType = {
    changePostText: (value: string) => void
    profileData: ProfilePageType
    addPost: () => void
}

export function Profile({profileData, addPost, changePostText}: PropsType) {
    return (
        <div className={'profile'}>
            <Header header={profileData.header}/>
            <Wall posts={profileData.posts} addPost={addPost} postTextValue={profileData.postTextValue} changePostText={changePostText}/>
        </div>
    );
}