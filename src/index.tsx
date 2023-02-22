import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import {state, addPost} from './redux/state';
import {rerenderEntireTree} from './render';


rerenderEntireTree();
