import React from "react";
import s from "./Wall.module.css"
import {Post} from "./Post/Post";
import {SubmitPost} from './SubmitPost/SubmitPost';



export function Wall(props: any) {

    const wallElements = props.posts.map( () => <Post/>)

    return (
        <div className={s.wall}>
            <SubmitPost/>
            { wallElements }
        </div>
    );
}