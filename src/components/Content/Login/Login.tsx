import React from 'react';
import s from './Login.module.css'
import LoginForm from './LoginForm';

export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div className={s.login}>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

