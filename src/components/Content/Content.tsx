import React from 'react';
import c from './Content.module.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {DialogsContainer} from './Dialogs/DialogsContainer';
import {UsersContainer} from './Users/UsersContainer';
import {ProfileContainer} from './Profile/ProfileContainer';


export function Content() {
    return (
        <div className={c.content}>
            <Routes>
                <Route path="/" element={<Navigate to={'profile'}/>}/>

                <Route path="profile" element={<ProfileContainer/>}>
                    <Route path=":userId" element={<ProfileContainer/>}/>
                </Route>
                <Route path="dialogs/*" element={<DialogsContainer/>}/>
                <Route path="users" element={<UsersContainer/>}/>

                <Route path="music" element={<div style={{textAlign: 'center', fontSize: '21px'}}>Music</div>}/>
                <Route path="login" element={<div style={{textAlign: 'center', fontSize: '21px'}}>Login</div>}/>

                <Route path={'*'} element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
            </Routes>
        </div>
    );
}