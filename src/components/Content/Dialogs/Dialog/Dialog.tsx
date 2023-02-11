import React from 'react';
import {CardUser} from '../../Profile/Wall/UserCard/CardUser';
import s from './Dialog.module.css';


export function Dialog() {
    return (
        <div className={s.dialog}>
            <CardUser/>
        </div>
    );
}
