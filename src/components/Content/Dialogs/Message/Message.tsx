import React from 'react';
import {Avatar} from 'antd';
import s from './Message.module.css';

export function Message() {
    return (
        <div className={s.content}>
            <div className={s.messageInfo}>
                <Avatar size={48}> John </Avatar>
                <div className={s.message}>some text for message some text for message </div>
            </div>
            <div className={s.status}>22:00</div>
        </div>
    );
}

