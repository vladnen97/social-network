import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/SideBar/SideBar";
import {Content} from "./components/Content/Content";


function App(props: any) {
    return (
            <div className={"app-wrapper"}>
                <Header/>
                <SideBar sideBar={props.state.sideBar}/>
                <Content content={props.state.content}/>
            </div>
    );
}

export default App;
