import React from 'react';
import {Post} from '../Post/Post';
import s from './Wall.module.css';
import {SubmitPost} from '../SubmitPost/SubmitPost';
import {WallPropsType} from './WallContainer';


export function Wall({posts, addPost, onChangeText, postTextValue}: WallPropsType) {

    const mappedPosts = posts.map( (p) => {
        return (
            <Post key={p.id} name={p.name} date={p.date} postContent={p.postContent} likes={p.likes} comments={p.comments}/>
        )
    })


    return (
        <div className={s.wall}>
            <SubmitPost postTextValue={postTextValue}
                        updateNewPostText={onChangeText}
                        addPost={addPost}
            />

            { mappedPosts }
        </div>
    );
}

