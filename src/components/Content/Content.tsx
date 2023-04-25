import React from 'react';
import c from './Content.module.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import {DialogsContainer} from './Dialogs/DialogsContainer';
import {UsersContainer} from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';
import {Login} from './Login/Login';
import {Empty} from 'antd';


export function Content() {
    return (
        <div className={c.content}>
            <Switch>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>

                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>

                <Route path="/music" render={() => <div style={{textAlign: 'center', fontSize: '21px'}}>Music</div>}/>
                <Route path="/login" render={() => <Login/>}/>

                <Route path="/" exact render={() => <Redirect to={'/profile'}/>}/>

                <Route render={() => <Empty imageStyle={{height: 200}} description={<h1>404:PAGE NOT FOUND</h1>}/>}/>
            </Switch>
        </div>
    );
}