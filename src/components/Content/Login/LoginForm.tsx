import React from 'react';
import s from './Login.module.css';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormDataType} from './Login';
import {makeField} from '../../../hoc/makeField';
import {Input, Checkbox, Button, Alert} from 'antd';
import {maxLength, minLength, required} from '../../../utils/validators';

const {Password} = Input
const AInput = makeField(Input)
const APassword = makeField(Password)
const ACheckbox = makeField(Checkbox)

const maxLength25 = maxLength(25)
const minLength3 = minLength(3)
const InputReq = required(true)

type CustomPropsType = {
    captchaUrl: string | null
}

const LoginForm = (props: InjectedFormProps<FormDataType, CustomPropsType> & CustomPropsType) => {
    return (
        <>
            {props.error && <Alert
                message="Submit error"
                description={props.error}
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
                       validate={[InputReq, maxLength25, minLength3]}
                       placeholder={'enter your password'}/>

                <Field component={ACheckbox}
                       label="Remember me"
                       type="checkbox"
                       name={'rememberMe'}/>

                {props.captchaUrl && <div
                    style={{display: 'flex', justifyContent: 'center', paddingBottom: '20px'}}>
                    <img src={props.captchaUrl} alt="captcha url"/>

                </div>}
                {props.captchaUrl &&
                    <Field name={'captcha'}
                           label={'captcha'}
                           validate={[InputReq]}
                           component={AInput}
                           size={'middle'}
                    />
                }
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button size={'large'} htmlType={'submit'} shape={'round'}
                            disabled={props.pristine}> Login </Button>
                </div>
            </form>
        </>
    )
}

export default reduxForm<FormDataType, CustomPropsType>({form: 'login'})(LoginForm)
