import React from "react";
import s from "./Wall.module.css"
import {Post} from "./Post/Post";



export function Wall(props: any) {

    let wallElements = props.posts.map( (w:any) => <Post name={w.name} date = {w.date} text = {w.text} likesCount={w.likes}/>)

    return (
        <div className={s.wall}>
            { wallElements }
        </div>
    );
}