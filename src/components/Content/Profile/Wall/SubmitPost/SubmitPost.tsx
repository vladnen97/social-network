import React, {ChangeEvent} from 'react';
import s from './SubmitPost.module.css'
import {Button} from 'antd';
import {ActionsType, addPostActionCreator, ChangeNewPostTextActionCreator} from '../../../../../redux/state';

type PropsType = {
    postTextValue: string
    dispatch: (action: ActionsType) => void
}

export function SubmitPost({postTextValue, dispatch}: PropsType) {

    const addPostHandler = () => {
        dispatch(addPostActionCreator());
    }
    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(ChangeNewPostTextActionCreator(e.currentTarget.value));
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