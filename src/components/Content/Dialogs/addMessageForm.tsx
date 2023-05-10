import React from 'react';
import s from './Dialogs.module.css';
import {Button, Input} from 'antd';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {makeField} from '../../../hoc/makeField';

const {TextArea} = Input
const ATextarea = makeField(TextArea);

const AddMessageForm = (props: InjectedFormProps<{text: string}>) => {
    return (
        <form className={s.sendMessage} onSubmit={props.handleSubmit}>
            <Field component={ATextarea} name={'text'} size={'large'} autoSize={{ minRows: 1, maxRows: 6 }}  placeholder={'Write a message...'}/>
            <Button shape={'round'} size={'large'} type={'primary'} htmlType={'submit'}> send </Button>
        </form>
    )
}

export default reduxForm<{text: string}>({form: 'add-message'})(AddMessageForm)