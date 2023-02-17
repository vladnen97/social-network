import React from 'react';
import s from './SideBar.module.css';
import {Nav} from './Nav/Nav';
import {FollowBlock} from './FollowBlock/FollowBlock';


export function SideBar() {
    return (
        <div className={s.sideBar}>
            <Nav/>
            <FollowBlock/>
        </div>
    );
}