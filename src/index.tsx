import './index.css';
import 'antd/dist/antd.css';
import {addPost, state} from './redux/state';
import {rerenderEntireTree} from './render';


rerenderEntireTree(state, addPost);
