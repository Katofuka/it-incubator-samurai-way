import React from 'react';
import style from './Diologs.module.css'

import { DialogItem } from './DialogItem/Dialog';
import {Message} from "./Message/Message";

export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Semen'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Ksenia'},
        {id: 4, name: 'Alesha'},
    ]

    let messagesData = [
        {id: 1, message: 'Эй алё чё такой вася'},
        {id: 2, message: 'Дароу! кадила?'},
        {id: 3, message: 'Сегодня не оч'},
        {id: 4, message: 'Люблю тортики'},
    ]

    let dialogsElements = dialogsData.map( d =><DialogItem name={d.name} id={d.id}/>)
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

