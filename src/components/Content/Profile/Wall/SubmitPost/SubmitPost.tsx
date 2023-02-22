import React, {useRef} from 'react';
import s from './SubmitPost.module.css'
import {Button} from 'antd';

type PropsType = {
    addPost: (text: string) => void
}

export function SubmitPost({addPost}: PropsType) {

    // const newPostText = React.createRef<HTMLTextAreaElement>()
    const newPostText = useRef<HTMLTextAreaElement>(null)

    const addPostHandler = () => {
        if (newPostText.current) {
            addPost(newPostText.current.value);
            newPostText.current.value = '';
        }
    }

    return (
        <div className={s.submitPost}>
            <textarea placeholder={'Whats new?'} cols={50} rows={3} ref={newPostText}></textarea>
            <Button size={'large'} onClick={addPostHandler}> Post </Button>
        </div>
    );
}