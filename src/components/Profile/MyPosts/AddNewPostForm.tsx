import {Field, InjectedFormProps} from "redux-form";
import style from "./MyPosts.module.css";
import styleApp from "../../../App.module.css";
import React from "react";
import {FormPostDataType} from "./MyPosts";
import {minValue5, required} from "../../../utils/validators";
import {TextAreaFormControls} from "../../../common/FormControls/FormControls";


export const AddNewPostForm = (props: InjectedFormProps<FormPostDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={`${style.addPostBlock} ${styleApp.blockBox}`}>
                <div className={style.inputPostMessage}>
                    <Field component={TextAreaFormControls}
                           name={'newPostText'}
                           placeholder={"add post text..."}
                           validate={[required, minValue5]}
                    />
                </div>
                <div className={style.buttonAddPost}>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    );
}