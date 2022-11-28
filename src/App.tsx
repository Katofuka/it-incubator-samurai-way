import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {dialogsType, postsType} from "./index";

type appType = {
    postsData: postsType
    dialogsData: dialogsType
}

function App(props: appType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/profile' render={() => {
                        return (
                            <Profile postsData={props.postsData}/>
                        )
                    }}/>
                    <Route path='/dialogs' render={() => {
                        return (
                            <Dialogs dialogs={props.dialogsData.dialogs} messages={props.dialogsData.messages}/>
                        )
                    }
                    }/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
