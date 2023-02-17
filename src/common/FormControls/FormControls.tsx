import React from 'react'
import style from "./FormControls.module.css";

type TextAreaFormControlsType = {
    input: {}
    meta: {
        touched: boolean,
        error: string | undefined,
        warning: string | undefined
    }
    placeholder: string
    children?: JSX.Element
    type?: string
}

export const FormControls: React.FC<TextAreaFormControlsType> = (props) => {
    const {
        meta: {
            touched,
            error,
            warning
        },
        children
    } = props
    const isError = touched && error

    return (
        <div>
            <div className={`${style.form} ${isError ? style.formError:''}`}>{children}</div>
            {touched && ((error && <span>{error}</span>)
                || (warning && <span>{warning}</span>)
            )}
        </div>

    )
}


export const TextAreaFormControls: React.FC<TextAreaFormControlsType> = (props) => {
    const {
        input,
        placeholder,
    } = props
    return (
            <FormControls {...props}>
                <textarea {...input} placeholder={placeholder}></textarea>
            </FormControls>
    )
}

export const InputFormControls: React.FC<TextAreaFormControlsType> = (props) => {
    const {
        input,
        placeholder,
        type
    } = props
    return (
        <FormControls {...props}>
            <input {...input} placeholder={placeholder} type={type}></input>
        </FormControls>
    )
}