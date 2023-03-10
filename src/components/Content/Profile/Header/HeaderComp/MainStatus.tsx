import React from 'react';
import s from '../Header.module.css';

type PropsType = {
    status: string
}

export function MainStatus({status}: PropsType) {
    return (
        <div className={s.status}>{status}</div>
    );
}
