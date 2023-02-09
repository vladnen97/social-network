import React from 'react';
import n from "./Navigation.module.css";
import {Item} from "./Item/Item";


export function Navigation() {
    return (
        <nav className={n.nav}>
            <Item link ={"/profile"} title ={'Profile'} logo={'user'}/>
            <Item link = {"/news"} title ={'Friends'} logo={'group'}/>
            <Item link = {"/dialogs"} title ={'Messages'} logo={'chat'}/>
            <Item link = {"/music"} title ={'Music'} logo={'music'}/>
            <Item link = {"/settings"} title ={'Settings'} logo={'settings'}/>
        </nav>
    );
}