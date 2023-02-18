import React from "react";
import s from "./Post.module.css"
import {CardUser} from '../UserCard/CardUser';
import {Divider} from 'antd';

type PropsType = {
    name: string
    date: string
    postContent: string
    likes: number
    comments: number
}

export function Post({name, date, postContent, likes, comments}: PropsType) {
    return (
        <div className={s.item}>
            <CardUser size={64} url={'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg'} name={name} status={date}/>

            <Divider className={s.custom}/>

            <div className={s.content}>
                {postContent}
            </div>

            <div className={s.active}>
                likes: <span> {likes} </span> comments: <span> {comments} </span>
            </div>
        </div>
    );
}