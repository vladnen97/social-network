import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/SideBar/SideBar";
import {Content} from "./components/Content/Content";


function App({state}: any) {
    return (
            <div className={"app-wrapper"}>
                <Header/>
                <SideBar sideBar={state.sideBar}/>
                <Content content={state.content}/>
            </div>
    );
}

export default App;
