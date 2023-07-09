import {authAPI, securityAPI} from '../api/api';
import {AppThunk} from './redux-store';
import {stopSubmit} from 'redux-form';

export type InitStateType = typeof initState
export type AuthActionsType =
    ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setCaptchaUrl>
    | ReturnType<typeof stopSubmit>


enum AuthActionTypes {
    SET_USER_DATA = 'auth/SET-USER-DATA',
    SET_CAPTCHA_URL = 'auth/SET-CAPTCHA-URL',
}


const initState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    captchaUrl: null as string | null,
    isAuth: false
}


export const authReducer = (state: InitStateType = initState, action: AuthActionsType): InitStateType => {
    switch (action.type) {
        case AuthActionTypes.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case AuthActionTypes.SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.payload.captchaUrl
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null = null, email: string | null = null, login: string | null = null, isAuth: boolean = false) => ({
    type: AuthActionTypes.SET_USER_DATA,
    payload: {id, email, login, isAuth}
} as const)
export const setCaptchaUrl = (captchaUrl: string) => ({type: AuthActionTypes.SET_CAPTCHA_URL, payload: {captchaUrl}} as const)

//thunks
export const getAuthData = (): AppThunk<Promise<void>> => async (dispatch) => {
    const data = await authAPI.getAuthData()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha?: string): AppThunk => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthData())
    } else {
        if (data.resultCode === 10 ) {
            dispatch(getCaptchaUrl())
        }
        dispatch(stopSubmit('login', {_error: data.messages[0]}))
    }

}

export const logout = (): AppThunk => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) dispatch(setAuthUserData())

}

export const getCaptchaUrl = (): AppThunk => async (dispatch) => {
    const res = await securityAPI.getCaptcha()
    dispatch(setCaptchaUrl(res.url))
}