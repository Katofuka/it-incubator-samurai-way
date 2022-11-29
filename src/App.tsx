import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {stateType} from "./Redux/state";

type appStateType = {
    appState: stateType
}

function App(props: appStateType) {

    const {
        postsData,
        messagesData,
        dialogsData
    } = props.appState
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/profile' render={() => {
                        return (
                            <Profile postsData={postsData}/>
                        )
                    }}/>
                    <Route path='/dialogs' render={() => {
                        return (
                            <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>
                        )
                    }
                    }/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
