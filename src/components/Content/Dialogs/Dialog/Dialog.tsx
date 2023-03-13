import React from 'react';
import {CardUser} from '../../Profile/Wall/UserCard/CardUser';
import s from './Dialog.module.css';
import {NavLink} from 'react-router-dom';
import {DialogType} from '../../../../redux/store';

type PropsType = Omit<DialogType, 'id'>

export function Dialog({url, name, status, path}: PropsType) {
    return (
        <NavLink className={({isActive}) => isActive ? `${s.dialog} ${s.active}` : s.dialog } to={path}>
            <CardUser size={56} url={url} name={name} status={status}/>
        </NavLink>
    );
}
