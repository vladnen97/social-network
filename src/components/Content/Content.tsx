import React from 'react';
import c from "./Content.module.css";
import {Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Music} from "./Music/Music";



export function Content(props: any) {
    return (
            <div className={c.content}>
                <Route path = '/profile' render={() => <Profile localState={props.state.profilePage}/> }/>
                <Route path = '/dialogs' render={() => <Dialogs /> }/>
                <Route path = '/news' render={() => <News/> }/>
                <Route path = '/music' render={() => <Music/> }/>
            </div>

    );
}