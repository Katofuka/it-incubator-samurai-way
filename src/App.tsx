import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {StateType, StoreType} from "./Redux/state";


type AppStateType = {
    store: StoreType,
}

const App: React.FC<AppStateType>  = (props) => {
    const state: StateType = props.store.getState()
    console.log(state)
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/profile' render={() => {
                        return (
                            <Profile profilePage={state.profilePage}
                                     addPost={props.store.addPost.bind(props.store)}
                                     changePostText={props.store.changePostText.bind(props.store)}
                            />
                        )
                    }}/>
                    <Route path='/dialogs' render={() => {
                        return (
                            <Dialogs
                                dialogPage={state.dialogPage}
                                addMessage={props.store.addMessage.bind(props.store)}
                                changeMessageText={props.store.changeMessageText.bind(props.store)}
                            />
                        )
                    }
                    }/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
