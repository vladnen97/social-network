import React from 'react';
import n from "./Navigation.module.css";
import {Item} from "./Item/Item";


export function Navigation(props: any) {
    return (
        <nav className={n.nav}>
            <Item link ={"/profile"} text ={'Profile'}/>
            <Item link = {"/news"} text ={'News'}/>
            <Item link = {"/dialogs"} text ={'Messages'}/>
            <Item link = {"/music"} text ={'Music'}/>
            <Item link = {"/settings"} text ={'Settings'}/>
        </nav>
    );
}