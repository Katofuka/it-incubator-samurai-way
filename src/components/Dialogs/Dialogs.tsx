import React, {ChangeEvent} from 'react';
import style from './Diologs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../Redux/dialog-reducer";

type DialogPropsType ={
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageText: string
    addMessage: ()=> void
    messageChangeText: (text: string)=> void
    // isAuth: boolean
}

export const Dialogs = (props: DialogPropsType) => {
    const {
        dialogsData,
        messagesData,
        newMessageText,
        addMessage,
        messageChangeText,
    } = props

    let dialogsElements = dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messages = messagesData.map(m => <Message key={m.id} message={m.message}/>)

    const onAddMessage = () => {
       addMessage()
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        messageChangeText(e.currentTarget.value)
        //props.changeMessageText(e.currentTarget.value)
    }

    // if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messages}
            </div>
            <div>
                <div>
                    <textarea placeholder={"add message text..."}
                              onChange={onMessageChange}
                              value={newMessageText}
                    />
                </div>
                <div>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>

        </div>
    );
}

