import React from "react";
import {NavLink} from "react-router-dom";
import d from './DialogItem.module.css';

type DialogItemPropsType = {
    name: string,
    id: number
}

export function DialogItem(props: DialogItemPropsType) {
    return (
        <NavLink className={d.dialogItem} activeClassName={d.active} to={"/dialogs/" + props.id}>
            {props.name}
        </NavLink>
    )
}