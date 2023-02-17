import React from 'react';
import s from '../Header.module.css';
import {SvgIcon} from '../../../../SideBar/SvgIcon';

type InfoTagPropsType = {
    iconId: string
    title: string
}

export function InfoTag({iconId, title}: InfoTagPropsType) {
    return (
        <div className={s.infoTag}>
            <SvgIcon id={iconId}/>
            <div>{title}</div>
        </div>
    );
}