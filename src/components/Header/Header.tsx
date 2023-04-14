import React from 'react';
import s from './Header.module.css';
import {SvgIcon} from '../SideBar/SvgIcon';
import {NavLink} from 'react-router-dom';

export function Header({login}: {login: string | null}) {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <SvgIcon id={'logo'}/>
            </div>
            <h1 className={s.title}>SocialNetwork</h1>
            {
                login
                    ? <h2 className={s.name}>{login}</h2>
                    : <NavLink to={'/login'} className={s.login}>Login</NavLink>
            }
        </header>
    );
}