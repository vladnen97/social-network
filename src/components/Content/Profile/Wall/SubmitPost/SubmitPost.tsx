import React, {ChangeEvent} from 'react';
import s from './SubmitPost.module.css'
import {Button} from 'antd';
import {changePostText} from '../../../../../redux/state';

type PropsType = {
    addPost: () => void
    changePostText: (value: string) => void
    postTextValue: string
}

export function SubmitPost({addPost, postTextValue}: PropsType) {

    const addPostHandler = () => {
        addPost();
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            changePostText(e.currentTarget.value);
    }

    return (
        <div className={s.submitPost}>
            <textarea placeholder={'Whats new?'} cols={50} rows={3} value={postTextValue}
                      onChange={onChangeHandler}/>
            <Button size={'large'} onClick={addPostHandler}> Post </Button>
        </div>
    );
}