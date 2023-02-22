import React from 'react';
import {Header} from "./Header/Header";
import {Wall} from "./Wall/Wall";
import {ProfilePageType} from '../../../redux/state';

type PropsType = {
    profileData: ProfilePageType
    addPost: (text: string) => void
}

export function Profile({profileData, addPost}: PropsType) {
    return (
        <div className={'profile'}>
            <Header header={profileData.header}/>
            <Wall posts={profileData.posts} addPost={addPost}/>
        </div>
    );
}