import React from 'react';
import {Avatar} from 'antd';
import s from './Message.module.css';

type PropsType = {
    url: string
    text: string
    status: string
}

export function Message({url, text, status}: PropsType) {
    return (
        <div className={s.content}>
            <div className={s.userInfo}>
                <Avatar size={48} src={url}/>
                <div className={s.status}>{status}</div>
            </div>
            <div className={s.message}>{text}</div>
        </div>
    );
}

