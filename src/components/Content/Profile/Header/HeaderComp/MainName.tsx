import React from 'react';
import s from '../Header.module.css';

type PropsType = {
    name: string | undefined
}

export function MainName({name}: PropsType) {
    return (
        <h2 className={s.ownerName}>{name ? name : 'Name Surname'}</h2>
    );
}
