import {appReducer, initializedSuccess} from '../redux/app-reducer';


type StartStateType = {
    initialized: boolean
}
let startState: StartStateType

beforeEach(() => {
    startState = {
        initialized: false
    }
})

it('app should be intialized', () => {
    const endState = appReducer(startState, initializedSuccess())

    expect(endState.initialized).toBeTruthy()
})

