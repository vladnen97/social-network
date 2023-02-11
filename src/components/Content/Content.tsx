import React from 'react';
import c from "./Content.module.css";
import {Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Friends} from "./Friends/Friends";
import {Music} from "./Music/Music";



export function Content(props: any) {
    return (
            <div className={c.content}>
                <Route path = '/profile' render={() => <Profile localState={props.state.profilePage}/> }/>
                <Route path = '/dialogs' render={() => <Dialogs /> }/>
                <Route path = '/friends' render={() => <Friends/> }/>
                <Route path = '/music' render={() => <Music/> }/>
            </div>

    );
}