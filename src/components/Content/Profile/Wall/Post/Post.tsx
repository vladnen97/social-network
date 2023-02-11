import React from "react";
import s from "./Post.module.css"
import {CardUser} from '../UserCard/CardUser';
import {Divider} from 'antd';



export function Post() {
    return (
        <div className={s.item}>
            <CardUser/>

            <Divider className={s.custom}/>

            <div className={s.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <div className={s.active}>
                likes: <span> 6</span> comments: <span> 0 </span>
            </div>
        </div>
    );
}