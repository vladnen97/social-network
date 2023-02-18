import React from "react";
import s from "./Wall.module.css"
import {Post} from "./Post/Post";
import {SubmitPost} from './SubmitPost/SubmitPost';

type PropsType = {
    posts: Array<any>
}

export function Wall({posts}: PropsType) {

    const wallElements = posts.map( (p) => {
        return (
            <Post key={p.id} name={p.name} date={p.date} postContent={p.postContent} likes={p.likes} comments={p.comments}/>
        )
    })

    return (
        <div className={s.wall}>
            <SubmitPost/>
            { wallElements }
        </div>
    );
}