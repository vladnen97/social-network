import React from 'react';
import s from './SideBar.module.css';
import {Nav} from './Nav/Nav';
import {FollowBlock} from './FollowBlock/FollowBlock';

type PropsType = {
    sideBar: {
        followingUsers: Array<any>
        title: string
        linkItems: Array<any>
    }
}

export function SideBar({sideBar}: PropsType) {


    return (
        <div className={s.sideBar}>
            <Nav linkItems={sideBar.linkItems}/>
            <FollowBlock followingUsers={sideBar.followingUsers} title={sideBar.title}/>
        </div>
    );
}