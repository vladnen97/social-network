import React from 'react';
import s from '../Header.module.css';

type PropsType = {
    name: string
}

export function MainName({name}: PropsType) {
    return (
        <h2 className={s.ownerName}>{name}</h2>
    );
}
