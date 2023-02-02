import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';

import {DialogContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/profile/:userId?' render={() => {
                    return (
                        <ProfileContainer />
                    )
                }}/>
                <Route path='/dialogs' render={() => {
                    return (
                        <DialogContainer/>
                    )
                }}/>
                <Route path='/users' render={() => {
                    return (
                        <UsersContainer/>
                    )
                }}/>

            </div>
        </div>

    );
}

export default App;
