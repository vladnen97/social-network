import React from 'react';
import h from './Header.module.css';
import {SvgIcon} from '../Navbar/SvgIcon';

export function Header() {
    return (
        <header className={h.header}>
            <div className={h.logo}>
                <SvgIcon id={'logo'}/>
            </div>
        </header>
    );
}