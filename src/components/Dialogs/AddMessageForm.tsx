import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {FormMessageDataType} from "./Dialogs";

export const AddMessageForm = (props: InjectedFormProps<FormMessageDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       name={'addMessageText'}
                       placeholder={"add message text..."}

                />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}
