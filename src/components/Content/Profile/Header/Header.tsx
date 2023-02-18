import React from 'react';
import s from './Header.module.css'
import {MainAvatar} from './HeaderComp/MainAvatar';
import {MainName} from './HeaderComp/MainName';
import {MainStatus} from './HeaderComp/MainStatus';
import {InfoTag} from './HeaderComp/InfoTag';

type PropsType = {
    header: {
        online: boolean
        url: string
        name: string
        status: string
        iconId: string
        title: string
    }
}

export function Header({ header: {online, url, name, title, status, iconId}}:PropsType) {

    return (
        <div className={s.header}>
            <div className={s.cover}></div>
            <div className={s.inner}>
                <MainAvatar online={online} url={url}/>
                <div className={s.info}>

                    <MainName name={name}/>
                    <MainStatus status={status}/>

                    <div className={s.fullInfo}>

                        <InfoTag iconId={iconId} title={title}/>

                    </div>
                </div>
            </div>
        </div>
    );
}