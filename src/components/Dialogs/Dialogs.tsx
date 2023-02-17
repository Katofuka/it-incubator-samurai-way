import React from 'react';
import style from './Diologs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../Redux/dialog-reducer";
import {reduxForm} from "redux-form";
import {AddMessageForm} from "./AddMessageForm";

type DialogPropsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    addMessage: (newMessageText: string) => void
    // isAuth: boolean
}

export type FormMessageDataType = {
    addMessageText: string
}

export const Dialogs = (props: DialogPropsType) => {
    const {
        dialogsData,
        messagesData,
        addMessage,
    } = props

    let dialogsElements = dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messages = messagesData.map(m => <Message key={m.id} message={m.message}/>)

      // if(!props.isAuth) return <Redirect to={'/login'}/>
    const onSubmit = (formData: FormMessageDataType) => {
        addMessage(formData.addMessageText)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messages}
            </div>
            <MessageAddReduxForm onSubmit={onSubmit}/>

        </div>
    );
}

const MessageAddReduxForm = reduxForm<FormMessageDataType>({form: 'messageAddForm'})(AddMessageForm)

