import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import store from './redux/redux-store';


function rerenderEntireTree(store: any) {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store);
store.subscribe(() => rerenderEntireTree(store));
