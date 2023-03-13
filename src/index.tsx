import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import {store} from './redux/store';

function rerenderEntireTree() {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
