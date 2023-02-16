import React from 'react'
import {Field, InjectedFormProps} from 'redux-form'
import {FormDataType} from "./Login";
import style from './Login.module.css'

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h1>Sign In Your Account</h1>
            <div className={style.inputForm}>
                <Field component={'input'} name={'email'} placeholder={'email'}/>
            </div>
            <div className={style.inputForm}>
                <Field component={'input'} name={'password'} type={'password'} placeholder={'password'}/>
            </div>
            <div className={style.checkingBox}>
                <Field component={'input'} name={'rememberMe'} id={'rememberMe'} type={"checkbox"} />
                <label htmlFor='rememberMe'>remember me</label>

            </div>
            <div>
                <button>
                    sign in
                </button>
            </div>

        </form>
    )
}

