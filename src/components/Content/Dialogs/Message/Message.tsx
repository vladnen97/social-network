import React from 'react';
import {Avatar} from 'antd';
import s from './Message.module.css';

export function Message() {
    return (
        <div className={s.message}>
            <Avatar size={64}> John </Avatar>
            <div>time</div>
        </div>
    );
}

