import React, {ChangeEvent} from 'react';
import s from './SubmitPost.module.css'
import {Button} from 'antd';


type PropsType = {
    postTextValue: string
    updateNewPostText: (value: string) => void
    addPost: () => void
}

export function SubmitPost({postTextValue, updateNewPostText, addPost}: PropsType) {

    const addPostHandler = () => {
        addPost()
    }
    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value);
    }

    return (
        <div className={s.submitPost}>
            <textarea placeholder={'Whats new?'}
                      cols={50}
                      rows={3}
                      value={postTextValue}
                      onChange={onChangeTextHandler}/>
            <Button size={'large'} onClick={addPostHandler}> Post </Button>
        </div>
    );
}