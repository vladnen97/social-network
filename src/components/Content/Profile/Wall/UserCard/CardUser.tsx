import React from 'react';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import s from './CardUser.module.css';

export function CardUser() {
    return (
        <div className={s.cardUser}>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <div className={s.info}>
                <div className={s.name}>
                    Vlad Nenashkin
                </div>
                <div className={s.status}>
                    time when sended
                </div>
            </div>
        </div>
    );
}

