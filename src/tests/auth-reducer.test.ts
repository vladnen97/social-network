import {authReducer, setAuthUserData} from '../redux/authReducer';


type StartStateType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
    captchaUrl: string | null
}
let startState: StartStateType

beforeEach(() => {
    startState = {
        id: null,
        login: null,
        email: null,
        isAuth: false,
        captchaUrl: null
    }
})

it('user data should not be setted', () => {
    const endState = authReducer(startState, setAuthUserData())

    expect(endState).toEqual(startState)
})

it('user data should be setted', () => {
    const endState = authReducer(startState, setAuthUserData(1, 'test@.com', 'test97', true))

    expect(endState.id).toBe(1)
    expect(endState.isAuth).toBe(true)
    expect(endState.login).toBe('test97')
})

