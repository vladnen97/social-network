import React from 'react';
import s from './Login.module.css';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormDataType} from './Login';
import {makeField} from '../../../hoc/makeField';
import {Input, Checkbox, Button, Form, Alert} from 'antd';
import {maxLength, minLength, required} from '../../../utils/validators';

const {Password} = Input
const AInput = makeField(Input)
const APassword = makeField(Password)
const ACheckbox = makeField(Checkbox)

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 14,
            offset: 6
        }
    }
}
const maxLength25 = maxLength(25)
const minLength5 = minLength(5)
const InputReq = required(true)

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <>
            {props.error && <Alert
                message="Submit error"
                description ={props.error}
                type="error"
                showIcon
                closable
            />}
            <form className={s.form} onSubmit={props.handleSubmit}>
                <Field name={'email'}
                       label={'Email'}
                       component={AInput}
                       hasFeedback
                       validate={[InputReq]}
                       size={'large'}
                       type="email"
                       placeholder={'enter your email'}/>


                <Field name={'password'}
                       label={'Password'}
                       component={APassword}
                       size={'large'}
                       hasFeedback
                       validate={[InputReq, maxLength25, minLength5]}
                       placeholder={'enter your password'}/>


                <Field component={ACheckbox}
                       label="Remember me"
                       type="checkbox"
                       name={'rememberMe'}/>

                <Form.Item {...tailFormItemLayout}>
                    <Button size={'large'} htmlType={'submit'} shape={'round'}
                            disabled={props.pristine}> Login </Button>
                </Form.Item>
            </form>
        </>
    )
}

export default reduxForm<FormDataType>({form: 'login'})(LoginForm)
