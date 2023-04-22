import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

export type InitStateType = typeof initState
type ActionsType = ReturnType<typeof setAuthUserData>

const SET_USER_DATA = 'SET-USER-DATA'

const initState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false
}


export const authReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const  setAuthUserData= (data: InitStateType) => ({type: SET_USER_DATA, data} as const)

export const getAuthData = () => (dispatch: Dispatch) => {
    authAPI.getAuthData().then((data) => {
        if (data.resultCode === 0) dispatch(setAuthUserData(data.data))
    })
}