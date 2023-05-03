import React from 'react';
import s from './Header.module.css'
import {MainAvatar} from './HeaderComp/MainAvatar';
import {MainName} from './HeaderComp/MainName';
import {MainStatus} from './HeaderComp/MainStatus';
import {HeaderPropsType} from './HeaderContainer';


export function Header({ header }: HeaderPropsType) {

    return (
        <div className={s.header}>
            <div className={s.cover}></div>
            <div className={s.inner}>
                <MainAvatar online={false} url={header?.photos.large}/>
                <div className={s.info}>

                    <MainName name={header?.fullName}/>
                    <MainStatus status={header?.aboutMe}/>

                    <div className={s.fullInfo}>
                        {/*<InfoTag iconId={iconId} title={title}/>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}