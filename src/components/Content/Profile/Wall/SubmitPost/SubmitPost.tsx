import React, {ChangeEvent} from 'react';
import s from './SubmitPost.module.css'
import {Button} from 'antd';
import {ActionsType} from '../../../../../redux/state';

type PropsType = {
    postTextValue: string
    dispatch: (action: ActionsType) => void
}

export function SubmitPost({postTextValue, dispatch}: PropsType) {

    const addPostHandler = () => {
        dispatch({type: 'ADD-POST'});
    }
    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value});
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