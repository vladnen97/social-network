import {authAPI} from '../api/api';
import {AppThunk} from './redux-store';
import {stopSubmit} from 'redux-form';

export type InitStateType = typeof initState
export type AuthActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof stopSubmit>

enum AuthActionTypes {
    SET_USER_DATA = 'SET-USER-DATA',

}


const initState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false
}


export const authReducer = (state: InitStateType = initState, action: AuthActionsType): InitStateType => {
    switch (action.type) {
        case AuthActionTypes.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null = null, email: string | null = null, login: string | null = null, isAuth: boolean = false) => ({
    type: AuthActionTypes.SET_USER_DATA,
    payload: {id, email, login, isAuth}
} as const)

//thunks
export const getAuthData = (): AppThunk<Promise<void>> => (dispatch) => {
    return authAPI.getAuthData().then((data) => {
        if (data.resultCode === 0) dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true))
    })
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) dispatch(getAuthData())
        else dispatch(stopSubmit('login', {_error: data.messages[0]}))
    })
}

export const logout = (): AppThunk => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) dispatch(setAuthUserData())
    })
}