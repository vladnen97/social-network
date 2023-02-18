import React from 'react';
import s from './Item.module.css'
import {NavLink} from 'react-router-dom';
import {SvgIcon} from '../../SvgIcon';

type PropsType = {
    link: string
    title: string
    logo: string
}

export function Item(props: PropsType) {
    return (
        <NavLink className={s.item} to={props.link}>
            <div className={s.icon}>
                <SvgIcon id={props.logo}/>
            </div>
            <div className={s.title}>{props.title}</div>
        </NavLink>
    );
}