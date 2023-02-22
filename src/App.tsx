import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/SideBar/SideBar";
import {Content} from "./components/Content/Content";
import {StateType} from './redux/state';

type PropsType = {
    addPost: (text: string) => void
    state: StateType
}

function App({state, addPost}: PropsType) {
    return (
            <div className={"app-wrapper"}>
                <Header/>
                <SideBar sideBar={state.sideBar}/>
                <Content profile={state.profilePage} dialogs={state.dialogsPage} addPost={addPost}/>
            </div>
    );
}

export default App;
