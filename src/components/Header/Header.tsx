import React from 'react';
import s from './Header.module.css';
import {SvgIcon} from '../SideBar/SvgIcon';
import {NavLink} from 'react-router-dom';

type PropsType = {
    login: string | null
    isAuth: boolean
}

export function Header({login, isAuth}: PropsType) {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <SvgIcon id={'logo'}/>
                <h1 style={{margin: '0'}}>SocialNetwork</h1>
            </div>
            {
                isAuth
                    ? <NavLink to={'/profile'}><h2 className={s.name}>{login}</h2> </NavLink>
                    : <NavLink to={'/login'} className={s.login}>Login</NavLink>
            }
        </header>
    );
}