import React from 'react';
import p from './Header.module.css'
import {UserOutlined} from '@ant-design/icons';
import {Avatar} from 'antd';
import {SvgIcon} from '../../../Navbar/SvgIcon';

export function Header() {
    return (
        <div className={p.header}>
            <div className={p.cover}></div>
            <div className={p.inner}>
                <Avatar className={p.avatar} size={180} icon={<UserOutlined/>}/>

                <div className={p.info}>
                    <h2 className={p.ownerName}>Vlad Nenashkin</h2>

                    <div className={p.status}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </div>

                    <div className={p.fullInfo}>

                        <div className={p.city}>
                            <SvgIcon id={'location'}/>
                            <div>Saint-Petersburg</div>
                        </div>

                        <div className={p.dateBirth}>
                            <SvgIcon id={'calendar'}/>
                            <div>2 october 1997</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}