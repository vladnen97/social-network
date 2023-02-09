import React from 'react';
import i from './Item.module.css'
import {NavLink} from 'react-router-dom';
import {SvgIcon} from '../SvgIcon';

type ItemPropsType = {
    link: string
    title: string
    logo: string
}

export function Item(props: ItemPropsType) {
    return (
        <NavLink className={i.item} activeClassName={i.active} to={props.link}>
            <div className={i.icon}>
                <SvgIcon id={props.logo}/>
            </div>
            <div className={i.title}>{props.title}</div>
        </NavLink>
    );
}