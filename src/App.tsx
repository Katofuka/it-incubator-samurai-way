import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Route} from 'react-router-dom';

import {DialogContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


const App = () => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/profile' render={() => {
                    return (
                        <Profile/>
                    )
                }}/>
                <Route path='/dialogs' render={() => {
                    return (
                        <DialogContainer/>
                    )
                }}/>
                <Route path='/users' render={() => {
                    return (
                        <UsersContainer />
                    )
                }}/>

            </div>
        </div>

    );
}

export default App;
