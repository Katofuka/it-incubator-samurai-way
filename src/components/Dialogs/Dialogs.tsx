import React from 'react';
import style from './Diologs.module.css'
import { DialogItem } from './DialogItem/Dialog';
import {Message} from "./Message/Message";
import { dialogsType } from '../..';

export const Dialogs = (props: dialogsType) => {

    let dialogsElements = props.dialogs.map( d =><DialogItem name={d.name} id={d.id}/>)
    let messages = props.messages.map(m =><Message message={m.message}/>)

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

