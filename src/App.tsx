import React from 'react';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';

import {DialogContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import style from './App.module.css'


const App = () => {
    return (
        <div className={style.appWrapper}>
            <HeaderContainer />
            <Navbar/>
            <div className={style.appWrapperContent}>

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
                        <UsersContainer />
                    )
                }}/>
                <Route path='/login' render={() => {
                    return (
                        <LoginContainer />
                    )
                }}/>

            </div>
        </div>

    );
}

export default App;
