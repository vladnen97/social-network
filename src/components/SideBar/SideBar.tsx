import React from 'react';
import s from './SideBar.module.css';
import {Nav} from './Nav/Nav';
import {FollowBlock} from './FollowBlock/FollowBlock';
import {SideBarPropsType} from './SideBarContainer';



export function SideBar({sideBar}: SideBarPropsType) {


    return (
        <div className={s.sideBar}>
            <Nav />
            <FollowBlock followingUsers={sideBar.followingUsers} title={sideBar.title}/>
        </div>
    );
}