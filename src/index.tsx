import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import {addPost, changePostText, state, subscribe} from './redux/state';

function rerenderEntireTree() {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changePostText={changePostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree();
subscribe(rerenderEntireTree);
