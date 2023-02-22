import React from 'react';
import c from './Content.module.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Profile} from './Profile/Profile';
import {Dialogs} from './Dialogs/Dialogs';
import {News} from './News/News';
import {Music} from './Music/Music';
import {DialogsPageType, ProfilePageType} from '../../redux/state';

type PropsType = {
    changePostText: (value: string) =>  void
    profile: ProfilePageType
    dialogs: DialogsPageType
    addPost: () => void
}

export function Content({profile, dialogs, addPost, changePostText}: PropsType) {
    return (
        <div className={c.content}>
            <Routes>
                <Route path="/" element={<Profile profileData={profile} addPost={addPost} changePostText={changePostText}/>}/>
                <Route path="dialogs/*" element={<Dialogs dialogsData={dialogs}/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="music" element={<Music/>}/>
                <Route path={'/404'} element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </div>
    );
}