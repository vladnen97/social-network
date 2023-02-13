import React from 'react';
import s from './Navigation.module.css';
import {Item} from './Item/Item';
import {Avatar, Divider} from 'antd';
import {UserOutlined} from '@ant-design/icons';


export function Navigation() {
    return (
        <nav className={s.sideBar}>
            <div className={s.nav}>
                <Item link={'/profile'} title={'Profile'} logo={'user'}/>
                <Item link={'/dialogs'} title={'Messages'} logo={'chat'}/>
                <Item link={'/news'} title={'News'} logo={'news'}/>
                <Item link={'/music'} title={'Music'} logo={'music'}/>
                <Item link={'/settings'} title={'Settings'} logo={'settings'}/>
            </div>
            <div className={s.following}>  {/*вынести в отдельную компоненту*/}
                <div className={s.followingHeader}>
                    <h2>I'm Following</h2>
                </div>

                <Divider className={s.divider}/>

                <div className={s.users}>
                    <div className={s.user}>
                        <Avatar size={48} icon={<UserOutlined/>}/>
                        <div className={s.userName}>Name K.</div>
                    </div>  {/*вынести в отдельную компоненту*/}
                </div>
            </div>
        </nav>
    );
}