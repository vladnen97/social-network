import React from 'react';
import {CardUser} from '../../Profile/Wall/UserCard/CardUser';
import s from './Dialog.module.css';

type PropsType = {
    url: string
    name: string
    status: string
}

export function Dialog({url, name, status}: PropsType) {
    return (
        <div className={s.dialog}>
            <CardUser size={56} url={url} name={name} status={status}/>
        </div>
    );
}
