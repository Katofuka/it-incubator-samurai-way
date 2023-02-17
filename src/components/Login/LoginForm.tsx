import React from 'react'
import {Field, InjectedFormProps} from 'redux-form'
import {FormLoginDataType} from "./Login";
import style from './Login.module.css'
import {InputFormControls} from "../../common/FormControls/FormControls";
import {email, minValue5, minValue8, required} from "../../utils/validators";

export const LoginForm = (props: InjectedFormProps<FormLoginDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h1>Sign In Your Account</h1>
            <div className={style.inputForm}>
                <Field component={InputFormControls}
                       name={'email'}
                       placeholder={'email'}
                       validate={[required, minValue5, email]}/>

            </div>
            <div className={style.inputForm}>
                <Field component={InputFormControls}
                       name={'password'}
                       type={'password'}
                       validate={[required, minValue8]}
                       placeholder={'password'}/>
            </div>
            <div className={style.checkingBox}>
                <Field component={'input'} name={'rememberMe'} id={'rememberMe'} type={"checkbox"}/>
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

