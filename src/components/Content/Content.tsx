import React from 'react';
import c from './Content.module.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Profile} from './Profile/Profile';
import {News} from './News/News';
import {Music} from './Music/Music';
import {StoreType} from '../../redux/store';
import {DialogsContainer} from './Dialogs/DialogsContainer';

type PropsType = {
    store: StoreType
}

export function Content({store}: PropsType) {
    return (
        <div className={c.content}>
            <Routes>
                <Route path="/" element={<Navigate to={'profile'}/>}/>

                <Route path="profile" element={<Profile store={store}/>}/>
                <Route path="dialogs/*" element={<DialogsContainer store={store}/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="music" element={<Music/>}/>

                <Route path={'*'} element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
            </Routes>
        </div>
    );
}