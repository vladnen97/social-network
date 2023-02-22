import React, {useRef} from 'react';
import s from './SubmitPost.module.css'
import {Button} from 'antd';
import {changePostText} from '../../../../../redux/state';

type PropsType = {
    addPost: () => void
    changePostText: (value: string) => void
    postTextValue: string
}

export function SubmitPost({addPost, postTextValue}: PropsType) {

    // const newPostText = React.createRef<HTMLTextAreaElement>()
    const newPostText = useRef<HTMLTextAreaElement>(null)

    const addPostHandler = () => {
        addPost();
    }
    const onChangeHandler = () => {
        if (newPostText.current) {
            changePostText(newPostText.current.value);
        }
    }

    return (
        <div className={s.submitPost}>
            <textarea placeholder={'Whats new?'} cols={50} rows={3} ref={newPostText} value={postTextValue}
                      onChange={onChangeHandler}/>
            <Button size={'large'} onClick={addPostHandler}> Post </Button>
        </div>
    );
}