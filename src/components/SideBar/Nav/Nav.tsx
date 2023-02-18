import React from 'react';
import s from './Nav.module.css';
import {Item} from './Item/Item';

type PropsType = {
    linkItems: Array<{id: string, link: string, title: string, logo: string }>
}

export function Nav({linkItems}: PropsType) {

    const mappedLinkItems = linkItems.map(link => {
        return (
            <Item key={link.id} link={link.link} title={link.title} logo={link.logo}/>
        )
    })
    return (
        <nav className={s.nav}>
            {mappedLinkItems}
        </nav>
    );
}

