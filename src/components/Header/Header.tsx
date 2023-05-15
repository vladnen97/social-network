import React from 'react';
import s from './Header.module.css';
import {SvgIcon} from '../SideBar/SvgIcon';
import {NavLink} from 'react-router-dom';
import {Button} from 'antd';

type PropsType = {
    login: string | null
    isAuth: boolean
    logout: () => void
}

export function Header({login, isAuth, logout}: PropsType) {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <SvgIcon id={'logo'}/>
                <h1 style={{margin: '0'}}>SocialNetwork</h1>
            </div>
            {
                isAuth
                    ? <div style={{display: 'flex', marginRight: '20px'}}>
                        <NavLink to={'/profile'}><h2 className={s.name}>{login}</h2></NavLink>
                        <Button onClick={logout} shape={'round'}>Logout</Button>
                    </div>
                    : <NavLink to={'/login'} className={s.login}>Login</NavLink>
            }
        </header>
    );
}