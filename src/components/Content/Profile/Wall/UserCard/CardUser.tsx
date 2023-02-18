import React from 'react';
import {Avatar} from 'antd';
import s from './CardUser.module.css';

type PropsType = {
    size: number
    url: string
    name: string
    status: string
}

export function CardUser({size, url, name, status}: PropsType) {
    return (
        <div className={s.cardUser}>
            <Avatar size={size} src={url}/>
            <div className={s.info}>
                <div className={s.name}>
                    {name}
                </div>
                <div className={s.status}>
                    {status}
                </div>
            </div>
        </div>
    );
}

