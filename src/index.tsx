import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import store, {StoreType} from './redux/redux-store';
import {Provider} from 'react-redux';


function rerenderEntireTree(store: StoreType) {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store);
store.subscribe(() => rerenderEntireTree(store));
