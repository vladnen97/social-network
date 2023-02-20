import React from 'react';
import s from './SideBar.module.css';
import {Nav} from './Nav/Nav';
import {FollowBlock} from './FollowBlock/FollowBlock';
import {SideBarType} from '../../redux/state';

type PropsType = {
    sideBar: SideBarType
}

export function SideBar({sideBar}: PropsType) {


    return (
        <div className={s.sideBar}>
            <Nav linkItems={sideBar.linkItems}/>
            <FollowBlock followingUsers={sideBar.followingUsers} title={sideBar.title}/>
        </div>
    );
}