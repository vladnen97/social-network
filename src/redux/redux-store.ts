import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import profileReducer, {ProfilePageActionsType} from './profileReducer';
import dialogsReducer, {DialogsPageActionsType} from './dialogsReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer, {UsersPageActionType} from './usersReducer';
import {AuthActionsType, authReducer} from './authReducer';
import thunk, {ThunkAction} from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sideBarReducer,
    auth: authReducer,
    form: formReducer
})

export type RootStateType = ReturnType<typeof rootReducer>
type AppActionTypes =
    UsersPageActionType
    | ProfilePageActionsType
    | DialogsPageActionsType
    | AuthActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionTypes>

const store: Store<RootStateType> = createStore(rootReducer, applyMiddleware(thunk));


export default store;

//@ts-ignore
window.store = store