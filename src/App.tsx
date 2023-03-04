import React from 'react';
import {Route, withRouter} from 'react-router-dom';

import {DialogContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import {LoginContainer} from "./components/Login/Login";
import style from './App.module.css'
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {AppRootStateType} from "./Redux/redux-store";
import {Preloader} from "./common/Preloader/Preloader";


type AppPropsType = MapStateToPropsType & MapDispatchPropsType

type MapDispatchPropsType = {
    initializeApp: () => void
    // logout: () => void
}
type MapStateToPropsType = {
    isInitialized: boolean
}

class App extends React.Component<AppPropsType, any> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (this.props.isInitialized)
            return (<div className={style.appWrapper}>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className={style.appWrapperContent}>

                        <Route path='/profile/:userId?' render={() => {
                            return (
                                <ProfileContainer/>
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
                        <Route path='/login' render={() => {
                            return (
                                <LoginContainer/>
                            )
                        }}/>

                    </div>
                </div>
            )
        else
            return <Preloader />
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isInitialized: state.appInitialReducer.isInitialized,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter)(App);
