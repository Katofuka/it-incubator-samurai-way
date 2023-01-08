import React, { ChangeEvent } from 'react';
import style from './Diologs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from "./Message/Message";
import {
    ActionType,
    addMessageActionCreator,
    changeMessageActionCreator,
    DialogPageType
} from '../../Redux/state';

type dialogsType = {
    dialogPage: DialogPageType
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props: dialogsType) => {
    const {
        dialogsData,
        messagesData,
        newMessageText,
    } = props.dialogPage

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messages = messagesData.map(m => <Message message={m.message}/>)

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
        //props.changeMessageText('')
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeMessageActionCreator(e.currentTarget.value))
        //props.changeMessageText(e.currentTarget.value)
    }


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
                    <textarea onChange={onMessageChange}
                              value={newMessageText}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>
    );
}

