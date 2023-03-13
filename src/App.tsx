import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/SideBar/SideBar";
import {Content} from "./components/Content/Content";
import {StoreType} from './redux/store';

type PropsType = {
    store: StoreType
}

function App({store}: PropsType) {
    return (
            <div className={"app-wrapper"}>
                <Header/>
                <SideBar sideBar={store.getState().sideBar}/>
                <Content store={store}/>
            </div>
    );
}

export default App;
