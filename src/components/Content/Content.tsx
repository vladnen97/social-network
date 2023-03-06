import React from 'react';
import c from './Content.module.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Profile} from './Profile/Profile';
import {Dialogs} from './Dialogs/Dialogs';
import {News} from './News/News';
import {Music} from './Music/Music';
import {ActionsType, DialogsPageType, ProfilePageType} from '../../redux/state';

type PropsType = {
    profile: ProfilePageType
    dialogs: DialogsPageType
    dispatch: (action: ActionsType) => void
}

export function Content({profile, dialogs, dispatch}: PropsType) {
    return (
        <div className={c.content}>
            <Routes>
                <Route path="/" element={<Navigate to={'profile'}/>}/>

                <Route path="profile" element={<Profile profileData={profile} dispatch={dispatch}/>}/>
                <Route path="dialogs/*" element={<Dialogs dialogsData={dialogs} dispatch={dispatch}/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="music" element={<Music/>}/>

                <Route path={'*'} element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
            </Routes>
        </div>
    );
}