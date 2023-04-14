import React from 'react';
import './App.css';
import {Content} from "./components/Content/Content";
import {SideBarContainer} from './components/SideBar/SideBarContainer';
import HeaderContainer from './components/Header/HeaderContainer';


function App() {
    return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <SideBarContainer/>
                <Content/>
            </div>
    );
}

export default App;
