import React from 'react';
import c from './Content.module.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Login from './Login/Login';
import {Empty} from 'antd';
import {withSuspense} from '../../hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'))


export function Content() {
    return (
        <div className={c.content}>
            <Switch>
                <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>

                <Route path="/dialogs/:userId?" render={withSuspense(DialogsContainer)}/>
                <Route path="/users" render={withSuspense(UsersContainer)}/>

                <Route path="/music" render={() => <div style={{textAlign: 'center', fontSize: '21px'}}>Music</div>}/>
                <Route path="/login" render={() => <Login/>}/>

                <Route path="/" exact render={() => <Redirect to={'/profile'}/>}/>

                <Route render={() => <Empty imageStyle={{height: 200}} description={<h1>404:PAGE NOT FOUND</h1>}/>}/>
            </Switch>
        </div>
    );
}