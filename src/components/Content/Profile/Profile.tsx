import React from 'react';
import {Header} from "./Header/Header";
import {Wall} from "./Wall/Wall";
import {ActionsType, ProfilePageType} from '../../../redux/state';

type PropsType = {
    profileData: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export function Profile({profileData, dispatch}: PropsType) {
    return (
        <div className={'profile'}>
            <Header header={profileData.header}/>
            <Wall posts={profileData.posts} postTextValue={profileData.postTextValue} dispatch={dispatch}/>
        </div>
    );
}