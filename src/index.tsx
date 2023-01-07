
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
//import {addMessage, addPost, changeMessageText, changePostText, state, StateType, subscribe} from "./Redux/state";
import {store} from "./Redux/state";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            store={store}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree();

store.subscribe(rerenderEntireTree);

