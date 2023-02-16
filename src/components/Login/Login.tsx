import React from 'react'
import {reduxForm} from 'redux-form';
import style from './Login.module.css'
import styleApp from '../../App.module.css'
import {LoginForm} from "./LoginForm";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {signIn} from "../../Redux/auth-reducer";


type MapStatePropsType = {}
type MapDispatchPropsType = {
    signIn: (email: string, password: string, rememberMe: boolean) => void
}

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type AuthPropsType = MapStatePropsType & MapDispatchPropsType

export const Login = (props: AuthPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.signIn(formData.email, formData.password, formData.rememberMe)
        //создать апи для логинизации
        //самостоятельно залогиниться
    }
    return (
        <div className={`${style.loginBlock} ${styleApp.blockBox}`}>
            <LoginReduxFrom onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => (
    {}
)

const LoginReduxFrom = reduxForm<FormDataType>({form: 'loginForm'})(LoginForm)
//законнектить


export const LoginContainer = connect(mapStateToProps, {signIn})(Login)
