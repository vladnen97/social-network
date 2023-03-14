import React from 'react';
import {Header} from "./Header/Header";
import {StoreType} from '../../../redux/store';
import s from './Profile.module.css';
import {SubmitPostContainer} from './SubmitPost/SubmitPostContainer';
import {Post} from './Post/Post';

type PropsType = {
    store: StoreType
}

export function Profile({store}: PropsType) {

    const wallElements = store.getState().profilePage.posts.map( (p) => {
        return (
            <Post key={p.id} name={p.name} date={p.date} postContent={p.postContent} likes={p.likes} comments={p.comments}/>
        )
    })

    return (
        <div>
            <Header header={store.getState().profilePage.header}/>

            <div className={s.wall}>
                <SubmitPostContainer store={store}/>
                { wallElements }
            </div>
        </div>
    );
}