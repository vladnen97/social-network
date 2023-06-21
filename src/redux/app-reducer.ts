import {AppThunk} from './redux-store';
import {getAuthData} from './authReducer';

type InitStateType = typeof initState
export type AppActionType = ReturnType<typeof initializedSuccess>

const initState = {
    initialized: false
}


export const appReducer = (state: InitStateType = initState, action: AppActionType): InitStateType => {
    switch (action.type) {
        case 'app/INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

//actions
export const initializedSuccess = () => {
    return {
        type: 'app/INITIALIZED-SUCCESS'
    }
}

//thunks
export const  initializeApp = (): AppThunk => async dispatch => {
    const data = await dispatch(getAuthData())
    dispatch(initializedSuccess())
}
