import React from 'react';
import s from './Item.module.css'
import {NavLink} from 'react-router-dom';
import {SvgIcon} from '../SvgIcon';



export function Item(props: any) {
    return (
        <NavLink className={s.item} activeClassName={s.active} to={props.link}>
            <div className={s.icon}>
                <SvgIcon id={props.logo}/>
            </div>
            <div className={s.title}>{props.title}</div>
        </NavLink>
    );
}