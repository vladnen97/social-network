import React from 'react';
import s from './Header.module.css'
import {MainAvatar} from './HeaderComp/MainAvatar';
import {MainName} from './HeaderComp/MainName';
import {MainStatus} from './HeaderComp/MainStatus';
import {InfoTag} from './HeaderComp/InfoTag';

export function Header() {
    return (
        <div className={s.header}>
            <div className={s.cover}></div>
            <div className={s.inner}>
                <MainAvatar/>
                <div className={s.info}>

                    <MainName/>
                    <MainStatus/>

                    <div className={s.fullInfo}>

                        <InfoTag iconId={'location'} title={'Saint-Petersburg'}/>
                        <InfoTag iconId={'calendar'} title={'2 october 1997'}/>

                    </div>
                </div>
            </div>
        </div>
    );
}