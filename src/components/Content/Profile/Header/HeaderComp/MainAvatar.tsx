import React from 'react';
import s from '../Header.module.css'
import {Avatar, Badge} from 'antd';

type PropsType = {
    url: string | undefined | null
    online: boolean
}

export function MainAvatar({url, online}: PropsType) {

    return (
        <div className={s.avatar}>
            <Badge dot offset={[-35, 160]} color={online ? 'green' : 'grey'} style={{width: '20px', height: '20px', border: '2px solid white'}}>
                <Avatar size={180} src={url ? url : 'https://placehold.jp/180x180.png'}/>
            </Badge>
        </div>
    );
}

