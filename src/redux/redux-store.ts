import {combineReducers, createStore, Store} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from './usersReducer';
import {authReducer} from './authReducer';


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sideBarReducer,
    auth: authReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

const store: Store<RootStateType> = createStore(rootReducer);


export default store;

//@ts-ignore
window.store= store