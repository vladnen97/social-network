import React, {ChangeEvent} from 'react';
import s from './SubmitPost.module.css'
import {Button, Input} from 'antd';


type PropsType = {
    postTextValue: string
    updateNewPostText: (value: string) => void
    addPost: () => void
}

const {TextArea} = Input

export function SubmitPost({postTextValue, updateNewPostText, addPost}: PropsType) {

    const addPostHandler = () => {
        addPost()
    }
    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value);
    }

    return (
        <div className={s.submitPost}>
            <TextArea size={'large'}
                      autoSize={{ minRows: 2, maxRows: 8 }}
                      placeholder={'Write a message...'}
                      value = {postTextValue}
                      onChange = {onChangeTextHandler}/>
            <Button size={'large'} onClick={addPostHandler} shape={'round'}> Post </Button>
        </div>
    );
}