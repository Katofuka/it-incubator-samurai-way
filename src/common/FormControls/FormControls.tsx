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
}

export const FormControls: React.FC<TextAreaFormControlsType> = (props) => {
    const {
        input,
        meta: {
            touched,
            error,
            warning
        },
        placeholder,
        children
    } = props


    return (
        <div>
            <div className={`${style.form} ${error ? style.formError:''}`}>{children}</div>
            {touched && ((error && <span>{error}</span>)
                || (warning && <span>{warning}</span>)
            )}
        </div>

    )
}


export const TextAreaFormControls: React.FC<TextAreaFormControlsType> = (props) => {
    const {
        input,
        meta: {
            error
        },
        placeholder,
    } = props
    return (
            <FormControls {...props}>
                <textarea {...input} placeholder={placeholder}></textarea>
            </FormControls>
    )
}