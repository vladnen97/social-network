import './index.css';
import 'antd/dist/antd.css';
import {state} from './redux/state';
import {rerenderEntireTree} from './render';


rerenderEntireTree(state);
