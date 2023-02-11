import React from 'react';
import p from './Header.module.css'
import {UserOutlined} from '@ant-design/icons';
import {Avatar, Badge} from 'antd';
import {SvgIcon} from '../../../Navbar/SvgIcon';

export function Header() {
    return (
        <div className={p.header}>
            <div className={p.cover}></div>
            <div className={p.inner}>
                <div className={p.avatar}>
                    <Badge dot offset={[-35, 160]} color={'green'} style={{width: '20px', height: '20px', border: '2px solid white'}}>
                        <Avatar size={180} icon={<UserOutlined/>}/>
                    </Badge>
                </div>
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