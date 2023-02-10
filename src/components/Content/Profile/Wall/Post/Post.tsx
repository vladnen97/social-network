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
                здесь будет располагаться контент поста
            </div>

            <div className={s.active}>
                likes: <span> 6</span> comments: <span> 0 </span>
            </div>
        </div>
    );
}