import React from 'react';
import c from './Content.module.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Profile} from './Profile/Profile';
import {News} from './News/News';
import {Music} from './Music/Music';
import {DialogsContainer} from './Dialogs/DialogsContainer';


export function Content() {
    return (
        <div className={c.content}>
            <Routes>
                <Route path="/" element={<Navigate to={'profile'}/>}/>

                <Route path="profile" element={<Profile/>}/>
                <Route path="dialogs/*" element={<DialogsContainer/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="music" element={<Music/>}/>

                <Route path={'*'} element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
            </Routes>
        </div>
    );
}