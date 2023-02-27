import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {FormMessageDataType} from "./Dialogs";
import {TextAreaFormControls} from "../../common/FormControls/FormControls";
import {required} from "../../utils/validators";

export const AddMessageForm = (props: InjectedFormProps<FormMessageDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextAreaFormControls}
                       name={'addMessageText'}
                       placeholder={"add message text..."}
                       validate={[required]}
                />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}
