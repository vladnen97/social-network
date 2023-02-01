import React from 'react';
import h from './Header.module.css';

export function Header() {
    return (
        <header className={h.header}>
            <img className={h.logo}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg6VbQr7k4bE8m1sGjODK19nEZn-UKVChBg&usqp=CAU"
                 alt="logo"
            />
        </header>
    );
}