import React from 'react';
import s from './FollowBlock.module.css';
import {Avatar, Divider} from 'antd';
import {UserOutlined} from '@ant-design/icons';

export function FollowBlock() {
    return (
        <div className={s.following}>
            <div className={s.followingHeader}>
                <h2>I'm Following</h2>
            </div>

            <Divider className={s.divider}/>

            <div className={s.users}>
                <div className={s.user}>
                    <Avatar size={48} icon={<UserOutlined/>}/>
                    <div className={s.userName}>Name K.</div>
                </div>
                {/*вынести в отдельную компоненту*/}
            </div>
        </div>
    );
}