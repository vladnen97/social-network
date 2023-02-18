import React from 'react';
import s from '../FollowBlock.module.css';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';

export function ShortUserCard() {



    return (
        <div className={s.user}>
            <Avatar size={48} icon={<UserOutlined/>}/>
            <div className={s.userName}>Name K.</div>
        </div>
    );
}