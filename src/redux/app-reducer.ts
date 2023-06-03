import {AppThunk} from './redux-store';
import {getAuthData} from './authReducer';

type InitStateType = typeof initState
export type AppActionType = ReturnType<typeof initializedSuccess>

const initState = {
    initialized: false
}


export const appReducer = (state: InitStateType = initState, action: AppActionType): InitStateType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
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
        type: 'INITIALIZED-SUCCESS'
    }
}

//thunks
export const  initializeApp = (): AppThunk => dispatch => {
    dispatch(getAuthData()).then(() => dispatch(initializedSuccess()))
}
