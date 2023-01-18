import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {store} from "./Redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

//import {addMessage, addPost, changeMessageText, changePostText, state, StateType, subscribe} from "./Redux/state";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();

store.subscribe(rerenderEntireTree);

