import React from 'react';
import s from '../Header.module.css'
import {Avatar, Badge} from 'antd';
import {UserOutlined} from '@ant-design/icons';

export function MainAvatar() {

    return (
        <div className={s.avatar}>
            <Badge dot offset={[-35, 160]} color={'green'} style={{width: '20px', height: '20px', border: '2px solid white'}}>
                <Avatar size={180} icon={<UserOutlined/>}/>
            </Badge>
        </div>
    );
}

