import React from 'react';
import s from './Nav.module.css';
import {Item} from '../Item/Item';

export function Nav() {

    return (
        <nav className={s.nav}>
            <Item link={'/profile'} title={'Profile'} logo={'user'}/>
            <Item link={'/dialogs'} title={'Messages'} logo={'chat'}/>
            <Item link={'/news'} title={'News'} logo={'news'}/>
            <Item link={'/music'} title={'Music'} logo={'music'}/>
            <Item link={'/settings'} title={'Settings'} logo={'settings'}/>
        </nav>
    );
}

