import React from 'react';
import s from './SubmitPost.module.css'
import {Button, Input} from 'antd';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {makeField} from '../../../../hoc/makeField';


const {TextArea} = Input
const ATextarea = makeField(TextArea);

function AddPostForm(props: InjectedFormProps<{postText: string}>) {

    return (
        <form className={s.submitPost} onSubmit={props.handleSubmit}>
            <Field component={ATextarea} name={'postText'} placeholder={"What's new?"} size={'large'} autoSize={{ minRows: 2, maxRows: 8 }}/>
            <Button size={'large'} htmlType={'submit'} shape={'round'}> Post </Button>
        </form>
    )
}

export default reduxForm<{postText: string}>({form: 'add-post'})(AddPostForm)