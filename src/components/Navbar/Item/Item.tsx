import React from 'react';
import i from './Item.module.css'
import {NavLink} from 'react-router-dom';
import {SvgIcon} from '../SvgIcon';



export function Item(props: any) {
    return (
        <NavLink className={i.item} activeClassName={i.active} to={props.link}>
            <div className={i.icon}>
                <SvgIcon id={props.logo}/>
            </div>
            <div className={i.title}>{props.title}</div>
        </NavLink>
    );
}