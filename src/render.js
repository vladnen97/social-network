import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';

export function rerenderEntireTree(state, addPost) {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
    </BrowserRouter>,
    document.getElementById('root')
)
}