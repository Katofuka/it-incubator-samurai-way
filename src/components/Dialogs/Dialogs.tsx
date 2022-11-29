import React from 'react';
import style from './Diologs.module.css'
import { DialogItem } from './DialogItem/DialogItem';
import {Message} from "./Message/Message";
import { dialogType, messageType} from '../../Redux/state';


type dialogsDataType = {
    dialogsData: dialogType[]
    messagesData: messageType[]
}

export const Dialogs = (props: dialogsDataType) => {
    const {
        dialogsData,
        messagesData
    } = props

    let dialogsElements = dialogsData.map(d =><DialogItem name={d.name} id={d.id}/>)
    let messages = messagesData.map(m =><Message message={m.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messages}
            </div>

        </div>
    );
}

