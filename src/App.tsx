import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Route} from 'react-router-dom';

import {DialogContainer} from "./components/Dialogs/DialogsContainer";


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
                }
                }/>

            </div>
        </div>

    );
}

export default App;
