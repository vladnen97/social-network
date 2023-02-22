import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';
import {addPost, changePostText, StateType} from './redux/state';

export function rerenderEntireTree(state: StateType) {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changePostText={changePostText}/>
    </BrowserRouter>,
    document.getElementById('root')
)
}