import React from 'react'
import {reduxForm} from 'redux-form';
import style from './Login.module.css'
import styleApp from '../../App.module.css'
import {LoginForm} from "./LoginForm";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {signIn} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";


type MapDispatchPropsType = {
    signIn: (email: string, password: string, rememberMe: boolean) => void

}

type MapStateToPropsType = {
    isAuth: boolean
}

export type FormLoginDataType = {
    email: string
    password: string
    rememberMe: boolean

}
type AuthPropsType = MapDispatchPropsType & MapStateToPropsType

export const Login = (props: AuthPropsType) => {

    const onSubmit = (formData: FormLoginDataType) => {
        props.signIn(formData.email, formData.password, formData.rememberMe)
        //создать апи для логинизации
        //самостоятельно залогиниться
    }
    if (props.isAuth)
        return <Redirect to={'/profile'}></Redirect>
    else
        return (
            <div className={`${style.loginBlock} ${styleApp.blockBox}`}>
                <LoginReduxFrom onSubmit={onSubmit}/>
            </div>
        )
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => (
    {isAuth: state.authReducer.isAuth}
)


const LoginReduxFrom = reduxForm<FormLoginDataType>({form: 'loginForm'})(LoginForm)
//законнектить


export const LoginContainer = connect(mapStateToProps, {signIn})(Login)
