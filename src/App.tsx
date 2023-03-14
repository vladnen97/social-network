import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {SideBarContainer} from './components/SideBar/SideBarContainer';


function App() {
    return (
            <div className={"app-wrapper"}>
                <Header/>
                <SideBarContainer/>
                <Content/>
            </div>
    );
}

export default App;
