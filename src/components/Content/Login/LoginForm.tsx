import React from 'react';
import s from './Login.module.css';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormDataType} from './Login';

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <Field name={'email'} component="input" placeholder={'enter your email'} required/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <Field name={'password'} component="input" placeholder={'enter your password'} required/>
            </div>
            <label>
                <Field component="input" type="checkbox" name={'rememberMe'}/> Remember me
            </label>
            <button>login</button>
        </form>
    )
}

export default reduxForm<FormDataType>({form: 'login'})(LoginForm)
