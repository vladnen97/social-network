import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import {store} from './redux/state';

function rerenderEntireTree() {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)} changePostText={store.changePostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
