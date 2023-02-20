import React from 'react';
import {Header} from "./Header/Header";
import {Wall} from "./Wall/Wall";
import {ProfilePageType} from '../../../redux/state';

type PropsType = {
    profileData: ProfilePageType
}

export function Profile({profileData}: PropsType) {
    return (
        <div className={'profile'}>
            <Header header={profileData.header}/>
            <Wall posts={profileData.posts}/>
        </div>
    );
}