import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navbar/Navigation";
import {Content} from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";


function App(props: any) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navigation/>
                <Content state={props.state}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
