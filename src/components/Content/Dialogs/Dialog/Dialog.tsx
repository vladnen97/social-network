import React from 'react';
import {CardUser} from '../../Profile/UserCard/CardUser';
import s from './Dialog.module.css';
import {NavLink} from 'react-router-dom';
import {DialogType} from '../../../../redux/dialogsReducer';

type PropsType = Omit<DialogType, 'id'>

export function Dialog({url, name, status, path}: PropsType) {
    return (
        <NavLink className={s.dialog} activeClassName={s.active} to={path}>
            <CardUser size={56} url={url} name={name} status={status}/>
        </NavLink>
    );
}
