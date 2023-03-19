import React from 'react';
import c from './Content.module.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Profile} from './Profile/Profile';
import {DialogsContainer} from './Dialogs/DialogsContainer';
import {UsersContainer} from './Users/UsersContainer';


export function Content() {
    return (
        <div className={c.content}>
            <Routes>
                <Route path="/" element={<Navigate to={'profile'}/>}/>

                <Route path="profile" element={<Profile/>}/>
                <Route path="dialogs/*" element={<DialogsContainer/>}/>
                <Route path="users" element={<UsersContainer/>}/>

                <Route path="music" element={<div style={{textAlign: 'center', fontSize: '21px'}}>Music</div>}/>
                <Route path={'*'} element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
            </Routes>
        </div>
    );
}