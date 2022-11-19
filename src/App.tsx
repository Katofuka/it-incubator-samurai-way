import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} component={Dialogs}/>
            </div>
        </div>
    );
}

export default App;
