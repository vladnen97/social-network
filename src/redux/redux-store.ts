import {combineReducers, createStore, Store} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from './usersReducer';


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sideBarReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

const store: Store<RootStateType> = createStore(rootReducer);


export default store;