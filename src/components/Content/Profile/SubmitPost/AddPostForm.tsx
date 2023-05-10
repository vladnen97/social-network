import React from 'react';
import s from './SubmitPost.module.css'
import {Button, Input} from 'antd';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


const {TextArea} = Input

function AddPostForm(props: InjectedFormProps<{postText: string}>) {

    return (
        <form className={s.submitPost} onSubmit={props.handleSubmit}>
            {/*<TextArea size={'large'}*/}
            {/*          autoSize={{ minRows: 2, maxRows: 8 }}*/}
            {/*          placeholder={"What's new?"}*/}
            {/*          value = {props.postTextValue}*/}
            {/*          onChange = {onChangeTextHandler}/>*/}
            <Field component={'textarea'} name={'postText'} placeholder={"What's new?"}/>
            <button> Post </button>
        </form>
    );
}

export default reduxForm<{postText: string}>({form: 'add-post'})(AddPostForm)