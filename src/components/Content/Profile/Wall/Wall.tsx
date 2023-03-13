import React from "react";
import s from "./Wall.module.css"
import {Post} from "./Post/Post";
import {StoreType} from '../../../../redux/store';
import {SubmitPostContainer} from './SubmitPost/SubmitPostContainer';

type PropsType = {
    store: StoreType
}

export function Wall({store}: PropsType) {

    const wallElements = store.getState().profilePage.posts.map( (p) => {
        return (
            <Post key={p.id} name={p.name} date={p.date} postContent={p.postContent} likes={p.likes} comments={p.comments}/>
        )
    })

    return (
        <div className={s.wall}>
            <SubmitPostContainer store={store}/>
            { wallElements }
        </div>
    );
}