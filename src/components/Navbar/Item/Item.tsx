import React from 'react';
import i from "./Item.module.css"
import {UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";

type ItemPropsType = {
    link: string,
    text: string
}

export function Item(props: ItemPropsType) {
    return (
            <NavLink className={i.item} activeClassName={i.active} to={props.link}>
                <UserOutlined style={{fontSize: '35px'}}/>
                <div className={i.name}>{props.text}</div>
            </NavLink>
    );
}