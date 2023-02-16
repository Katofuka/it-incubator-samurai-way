import React from 'react'
import {Field, InjectedFormProps} from 'redux-form'
import {FormDataType} from "./Login";

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h1>Authorisation</h1>
            <div>
                <Field component={'input'} name={'email'} placeholder={'email'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={"checkbox"} />
                    remember me

            </div>
            <div>
                <button>
                    sign in
                </button>
            </div>

        </form>
    )
}

