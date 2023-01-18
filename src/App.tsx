import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import { Route} from 'react-router-dom';
import {AppRootStateType} from "./Redux/redux-store";
import {DialogPageType} from "./Redux/dialog-reducer";
import { useSelector} from "react-redux";
import {ProfilePageType} from "./Redux/profile-reducer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

const App = () => {
    const stateDialog = useSelector<AppRootStateType, DialogPageType>(state => state.dialogReducer)
    const stateProfile = useSelector<AppRootStateType, ProfilePageType>(state => state.profileReducer)


    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/profile' render={() => {
                    return (
                        <Profile profilePage={stateProfile} />
                    )
                }}/>
                <Route path='/dialogs' render={() => {
                    return (
                        <DialogsContainer dialogPage={stateDialog} />
                    )
                }
                }/>

            </div>
        </div>

    );
}

export default App;
