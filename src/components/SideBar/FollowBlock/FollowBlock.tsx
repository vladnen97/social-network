import React from 'react';
import s from './FollowBlock.module.css';
import {Divider} from 'antd';
import {ShortUserCard} from './ShortUserCard/ShortUserCard';


type PropsType = {
    followingUsers: Array<{id: string, name: string, size: number, url: string}>
    title: string
}

export function FollowBlock({followingUsers, title}: PropsType) {

    const mappedFollowingUsers = followingUsers.map(u => {
        return (
            <ShortUserCard key={u.id} name={u.name} size={u.size} url={u.url}/>
        )
    });

    return (
        <div className={s.following}>
            <div className={s.followingHeader}>
                <h2>{title}</h2>
            </div>

            <Divider className={s.divider}/>

            <div className={s.users}>
                {mappedFollowingUsers}
            </div>
        </div>
    );
}