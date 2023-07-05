import React, {ChangeEvent} from 'react';
import s from './Header.module.css'
import {MainAvatar} from './HeaderComp/MainAvatar';
import {MainName} from './HeaderComp/MainName';
import {MainStatus} from './HeaderComp/MainStatus';
import {HeaderPropsType} from './HeaderContainer';


export function Header({ header, status, updateStatus, uploadPhoto, match }: HeaderPropsType) {

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        uploadPhoto(e.target.files?.[0])
    }

    return (
        <div className={s.header}>
            <div className={s.cover}></div>
            <div className={s.inner}>
                <MainAvatar online={false} url={header.photos?.large}/>
                <div className={s.info}>

                    <MainName name={header?.fullName}/>
                    <MainStatus status={status} updateStatus={updateStatus}/>

                    <div className={s.fullInfo}>
                    </div>
                </div>
                {!match.params.userId && <input type="file" onChange={onPhotoSelected}/>}
            </div>
        </div>
    );
}