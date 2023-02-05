import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navbar/Navigation";
import {Content} from "./components/Content/Content";


function App(props: any) {
    return (
            <div className={"app-wrapper"}>
                <Header/>
                <Navigation/>
                <Content state={props.state}/>
            </div>
    );
}

export default App;
