import React from 'react';
import c from "./Content.module.css";
import {Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Music} from "./Music/Music";

type PropsType = {

}

export function Content({content}: any) {
    return (
            <div className={c.content}>
                <Route path = '/profile' render={() => <Profile localState={content.profilePage}/> }/>
                <Route path = '/dialogs' render={() => <Dialogs localState={content.dialogsPage}/> }/>
                <Route path = '/news' render={() => <News/> }/>
                <Route path = '/music' render={() => <Music/> }/>
            </div>

    );
}