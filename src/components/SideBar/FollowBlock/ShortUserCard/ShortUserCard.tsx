import React from 'react';
import s from '../FollowBlock.module.css';
import {Avatar} from 'antd';

type PropsType = {
    name: string
    size: number
    url: string
}

export function ShortUserCard({name, url, size}: PropsType) {

    return (
        <div className={s.user}>
            <Avatar size={size} src={url}/>
            <div className={s.userName}>{name}</div>
        </div>
    );
}