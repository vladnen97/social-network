import React from 'react';
import s from './Login.module.css'
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../../redux/authReducer';
import {RootStateType} from '../../../redux/redux-store';
import {Redirect} from 'react-router-dom';

export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
    captcha?: string
}

type MapStateToPropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

type LoginPropsType = MapStateToPropsType & {
    login: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
}

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>
    return (
        <div className={s.login}>
            <div className={s.desc}>
                <p>To log in get registered
                    <a href={'https://social-network.samuraijs.com/'}
                       target={'_blank'}> here
                    </a>
                </p>
                <p>or use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>
            <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)

