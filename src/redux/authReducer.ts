
const SET_USER_DATA = 'SET-USER-DATA'

const initState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
}

export type InitStateType = typeof initState
type ActionsType = ReturnType<typeof setAuthUserData>

export const authReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const  setAuthUserData= (data: InitStateType) => ({type: SET_USER_DATA, data} as const)
