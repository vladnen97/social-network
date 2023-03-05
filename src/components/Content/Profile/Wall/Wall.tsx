import React from "react";
import s from "./Wall.module.css"
import {Post} from "./Post/Post";
import {SubmitPost} from './SubmitPost/SubmitPost';
import {PostType} from '../../../../redux/state';

type PropsType = {
    postTextValue: string
    posts: Array<PostType>
    addPost: () => void
    changePostText: (value: string) => void
}

export function Wall({posts, addPost, postTextValue, changePostText}: PropsType) {

    const wallElements = posts.map( (p) => {
        return (
            <Post key={p.id} name={p.name} date={p.date} postContent={p.postContent} likes={p.likes} comments={p.comments}/>
        )
    })

    return (
        <div className={s.wall}>
            <SubmitPost addPost={addPost} postTextValue={postTextValue} changePostText={changePostText}/>
            { wallElements }
        </div>
    );
}