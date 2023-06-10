import React, {memo} from 'react';
import {Post} from '../Post/Post';
import s from './Wall.module.css';
import AddPostForm from '../SubmitPost/AddPostForm';
import {WallPropsType} from './WallContainer';


export const Wall = memo((props: WallPropsType) => {
    let {posts, addPost} = props

    const mappedPosts = posts.map((p) => {
        return (
            <Post key={p.id} name={p.name} date={p.date} postContent={p.postContent} likes={p.likes}
                  comments={p.comments}/>
        )
    })

    const onSubmit = (value: { postText: string }) => {
        addPost(value.postText)
    }


    return (
        <div className={s.wall}>
            <AddPostForm onSubmit={onSubmit}/>

            {mappedPosts}
        </div>
    )
})

